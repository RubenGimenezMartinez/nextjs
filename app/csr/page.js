'use client'; // Indica que este componente se ejecuta en el cliente

import { useState, useEffect } from 'react';

export default function ComponenteCSR() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [contador, setContador] = useState(0);

  // Este efecto se ejecuta solo en el cliente
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setCargando(true);
        // Simulamos una llamada a API
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        const datosObtenidos = [
          { id: 1, titulo: "Elemento 1", activo: true },
          { id: 2, titulo: "Elemento 2", activo: false },
          { id: 3, titulo: "Elemento 3", activo: true },
          { id: 4, titulo: "Elemento 4", activo: false },
        ];
        
        setDatos(datosObtenidos);
      } catch (error) {
        console.error('Error cargando datos:', error);
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []); // Se ejecuta solo al montar el componente

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <div style={{ height: "100vh", padding: "20px", border: "2px solid #2196F3", borderRadius: "8px", backgroundColor: "#f3f9ff", color: "#000000" }}>
      <h2>Componente CSR - Renderizado en el Cliente</h2>
      <p>Este componente se renderiza completamente en el navegador del cliente con JavaScript.</p>

      <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#e3f2fd", borderRadius: "5px" }}>
        <h3>Estado Interactivo:</h3>
        <p style={{ fontSize: "18px" }}>
          <strong>Contador: {contador}</strong>
        </p>
        <button
          onClick={handleClick}
          style={{
            padding: "10px 20px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Incrementar Contador
        </button>
      </div>

      <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f0f4ff", borderRadius: "5px" }}>
        <h3>Datos Cargados desde Cliente:</h3>
        {cargando ? (
          <p style={{ color: "#666" }}>⏳ Cargando datos...</p>
        ) : (
          <ul>
            {datos.map((item) => (
              <li key={item.id}>
                <strong>{item.titulo}</strong> - {item.activo ? "✅ Activo" : "❌ Inactivo"}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#fff3e0", borderRadius: "5px" }}>
        <h4>Características del CSR:</h4>
        <ul style={{ fontSize: "14px" }}>
          <li>🎯 Interactividad total con hooks (useState, useEffect, etc.)</li>
          <li>🔄 Los datos se cargan después de que se monta el componente</li>
          <li>⚙️ Se requiere JavaScript en el cliente</li>
          <li>🚀 Ideal para aplicaciones dinámicas e interactivas</li>
          <li>📊 Los cambios de estado se reflejan instantáneamente</li>
        </ul>
      </div>

      <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f3e5f5", borderRadius: "5px", fontSize: "12px", color: "#666" }}>
        <p>
          Con la directiva <code>&apos;use client&apos;</code> al inicio, este componente se ejecuta completamente en el navegador.
        </p>
      </div>
    </div>
  );
}
