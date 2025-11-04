// Next.js App Router: page component with searchParams
export default async function Info({ searchParams }) {
  const params = await searchParams;
  
  return (
    <div>
      <h1>Información sobre Next.js</h1>
      <p>Next.js es un framework de React para la creación de aplicaciones web.</p>
      {!params || params.name === "" ? <p>Hola, invitado!</p> : <p>Hola, {params.name}!</p>}
    </div>
  );
}
