import React, { useState } from 'react';
import Queue from './Queue';

const initialQueue = new Queue();

initialQueue.push({
    name: 'Juan',
    amount: 1000,
    date: '2025-01-01T08:00'
});
initialQueue.push({
    name: 'Santiago',
    amount: 3000,
    date: '2025-01-02T09:30'
});
initialQueue.push({
    name: 'Jorge',
    amount: 9000,
    date: '2025-01-03T10:45'
});

const QueueScreen = () => {
    const [queue] = useState(initialQueue);
    const [people, setPeople] = useState(queue.getAll());
    const [form, setForm] = useState({
        name: '',
        amount: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const person = {
            name: form.name,
            amount: form.amount,
            date: form.date
        };

        queue.push(person);
        setPeople(queue.getAll());

        setForm({ name: '', amount: '', date: '' });
    };

    const formatDateTime = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Cola del Cajero</h2>

            <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}
            >
                <input
                    name="name"
                    placeholder="Nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    name="amount"
                    type="number"
                    placeholder="Monto"
                    value={form.amount}
                    onChange={handleChange}
                    required
                />
                <input
                    type="datetime-local"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Agregar Persona</button>
            </form>

            <h3>Personas en Cola: {queue.size()}</h3>
            {people.length === 0 ? (
                <p>La cola está vacía.</p>
            ) : (
                <ul>
                    {people
                        .slice()
                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                        .map((person, index) => (
                            <li key={index}>
                                <strong>{person.name}</strong> - ${person.amount} - {formatDateTime(person.date)}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default QueueScreen;
