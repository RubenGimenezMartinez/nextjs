// Componente SSR - Server-Side Rendering
// Este componente se renderiza en el servidor

export default async function SSR() {
  // Simulamos una llamada a API en el servidor
  // En producción, aquí harías fetch a tu API real
  const datos = await obtenerDatos();

  return (
    <div style={{height: "100vh", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", color: "#000000", backgroundColor: "#ffffff" }}>    
      <h2>Componente SSR - Renderizado en el Servidor</h2>
      <p>Este componente se renderiza completamente en el servidor antes de enviar el HTML al cliente.</p>
      
      <div style={{ marginTop: "20px", backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "5px" }}>
        <h3>Datos obtenidos del servidor:</h3>
        <ul>
          {datos.map((item, index) => (
            <li key={index}>
              <strong>{item.nombre}</strong>: {item.descripcion}
            </li>
          ))}
        </ul>
      </div>

      <p style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
        ⚡ Este contenido fue generado en el servidor y no requiere JavaScript en el cliente.
      </p>
    </div>
  );
}

// Función para obtener datos (simula una llamada a API)
async function obtenerDatos() {
  // Simulamos un delay de 1 segundo
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { nombre: "Dato 1", descripcion: "Información obtenida del servidor" },
    { nombre: "Dato 2", descripcion: "Renderizado en SSR" },
    { nombre: "Dato 3", descripcion: "Sin necesidad de JavaScript en cliente" },
  ];
}
