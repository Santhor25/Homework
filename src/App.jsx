import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [search, setSearch] = useState('');

  const handleAddImage = (e) => {
    e.preventDefault();

    if (!title || !id) return;

    const newImage = {
      id: Number(id),
      title,
      url: `https://picsum.photos/id/${id}/200/300`,
    };

    setImages([...images, newImage]);
    setTitle('');
    setId('');
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredImages = images.filter((img) =>
    img.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Añadir Imagen</h2>
      <form onSubmit={handleAddImage}>
        <input
          type="number"
          min="0"
          placeholder="ID de la imagen"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Título de la imagen"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit" className="boton-azul">Agregar</button>
      </form>

      <h2>Buscar por título</h2>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={handleSearchChange}
      />

      <h2>Lista de Imágenes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredImages.map((img) => (
          <div key={img.id} style={{ textAlign: 'center' }}>
            <img src={img.url} alt={img.title} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
