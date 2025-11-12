
import React, { useState } from 'react';
import Stack from './Stacks';
import styles from './styles.module.scss';

const initialStack = new Stack();

initialStack.push({ name: 'El Quijote', isbn: '978-1234567890', author: 'Miguel de Cervantes', editorial: 'Planeta' });
initialStack.push({ name: 'Cien Años de Soledad', isbn: '978-9876543210', author: 'Gabriel García Márquez', editorial: 'Sudamericana' });
initialStack.push({ name: 'La Sombra del Viento', isbn: '978-1112223334', author: 'Carlos Ruiz Zafón', editorial: 'Editorial Planeta' });

const StackScreen = () => {
    const [stack] = useState(initialStack);
    const [books, setBooks] = useState(stack.getAll());
    const [form, setForm] = useState({
        name: '',
        isbn: '',
        author: '',
        editorial: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        stack.push(form);
        setBooks(stack.getAll());
        setForm({ name: '', isbn: '', author: '', editorial: '' });
    };


    return (
        <div className={styles.div}>
            <h2>Pila de Libros</h2>

            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
                <input name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} />
                <input name="author" placeholder="Autor" value={form.author} onChange={handleChange}/>
                <input name="editorial" placeholder="Editorial" value={form.editorial} onChange={handleChange} />
                <button type="submit">Agregar Libro</button>
            </form>

            <h3>Libros en la pila: {stack.size()}</h3>
            {books.length === 0 ? (
                <p>La pila está vacía.</p>
            ) : (
                <ul>
                    {books.slice().reverse().map((book, index) => (
                        <li key={index}>
                            <strong>{book.name}</strong> - {book.author} ({book.isbn}) - {book.editorial}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default StackScreen;
