import React, { useState } from 'react';

export default function App() {
  const [busqueda, setBusqueda] = useState('');
  const [frutas, setFrutas] = useState([
    { id: 1, nombre: 'manzana', likes: 0, emoji: '🍎' },
    { id: 2, nombre: 'uva', likes: 0, emoji: '🍇' },
    { id: 3, nombre: 'sandía', likes: 0, emoji: '🍉' }
  ]);

  const darLike = (id) => {
    setFrutas(frutas.map(f => f.id === id ? { ...f, likes: f.likes + 1 } : f));
  };

  const totalLikes = frutas.reduce((sum, f) => sum + f.likes, 0);

  const frutasFiltradas = frutas.filter(f => 
    f.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{
      backgroundColor: '#130d24',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      paddingTop: '40px',
      color: '#fff'
    }}>
      {/* Título principal con línea morada/azul */}
      <h1 style={{ fontSize: '32px', marginBottom: '5px', fontWeight: 'bold' }}>Laboratorio</h1>
      <div style={{ width: '180px', height: '3px', backgroundColor: '#6c5ce7', marginBottom: '30px' }}></div>

      {/* Contenedor blanco central */}
      <div style={{
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: '30px 40px',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        textAlign: 'center',
        width: '600px',
        maxWidth: '90%'
      }}>
        {/* Total de likes */}
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>
          Total de likes de las frutas: {totalLikes}
        </h2>

        {/* Input de búsqueda */}
        <div style={{ marginBottom: '25px' }}>
          <input 
            type="text" 
            placeholder="Ingrese nombre de una fruta" 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              width: '80%',
              padding: '8px 12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
              outline: 'none',
              color: '#555'
            }}
          />
        </div>

        {/* Fila de tarjetas de frutas */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          {frutasFiltradas.map((fruta) => (
            <div key={fruta.id} style={{
              border: '2px solid #b2dfdb',
              borderRadius: '8px',
              padding: '15px 10px',
              width: '130px',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              {/* Imagen / Emoji de la fruta dentro de un recuadro */}
              <div style={{
                border: '1px solid #b2dfdb',
                borderRadius: '6px',
                width: '70px',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '38px',
                marginBottom: '12px',
                backgroundColor: '#fafafa'
              }}>
                {fruta.emoji}
              </div>

              {/* Nombre de la fruta */}
              <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#333' }}>
                {fruta.nombre}
              </p>

              {/* Botón de Like */}
              <button 
                onClick={() => darLike(fruta.id)}
                style={{
                  backgroundColor: '#4caf50',
                  color: 'white',
                  border: 'none',
                  padding: '6px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '500'
                }}
              >
                Like {fruta.likes}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
