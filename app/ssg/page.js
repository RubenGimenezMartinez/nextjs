// Componente SSG - Static Site Generation
// Este componente se pre-renderiza en tiempo de build

export const revalidate = 60; // Revalidar cada 60 segundos (ISR - Incremental Static Regeneration)

export default async function ComponenteSSG() {
  // Obtenemos datos en tiempo de build (o en ISR)
  const datos = await obtenerDatosEstaticos();
  const timestamp = new Date().toLocaleString('es-ES');

  return (
    <div style={{ height: "100vh", padding: "20px", border: "2px solid #4CAF50", borderRadius: "8px", backgroundColor: "#f9fff9", color: "#000000" }}>
      <h2>Componente SSG - Generación Estática</h2>
      <p>Este componente se pre-renderiza en tiempo de build y se sirve como un archivo estático.</p>
      
      <div style={{ marginTop: "20px", backgroundColor: "#e8f5e9", padding: "15px", borderRadius: "5px" }}>
        <h3>Datos Pre-renderizados:</h3>
        <ul>
          {datos.map((item, index) => (
            <li key={index}>
              <strong>{item.id}</strong>: {item.titulo}
              <br />
              <small style={{ color: "#666" }}>{item.descripcion}</small>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#fff3e0", borderRadius: "5px" }}>
        <p><strong>⏱️ Última generación:</strong> {timestamp}</p>
        <p style={{ fontSize: "12px", color: "#666" }}>
          Con ISR (revalidate = 60), esta página se regenerará automáticamente cada 60 segundos.
        </p>
      </div>

      <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#e3f2fd", borderRadius: "5px" }}>
        <h4>Ventajas del SSG:</h4>
        <ul style={{ fontSize: "14px" }}>
          <li>⚡ Carga muy rápida (sirve un HTML estático)</li>
          <li>🔒 Sin consultas a base de datos en runtime</li>
          <li>📊 Excelente para SEO</li>
          <li>♻️ Con ISR, se puede revalidar periódicamente</li>
        </ul>
      </div>
    </div>
  );
}

// Función para obtener datos estáticos (llamada en tiempo de build)
async function obtenerDatosEstaticos() {
  // En producción, aquí harías fetch a tu API
  // Los datos se capturan durante el build
  
  return [
    { id: 1, titulo: "Artículo 1", descripcion: "Pre-renderizado en tiempo de build" },
    { id: 2, titulo: "Artículo 2", descripcion: "Servido como archivo estático" },
    { id: 3, titulo: "Artículo 3", descripcion: "Muy rápido de cargar" },
    { id: 4, titulo: "Artículo 4", descripcion: "Ideal para contenido que cambia poco" },
  ];
}
