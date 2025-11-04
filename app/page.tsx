"use client";
import Image from "next/image";

export default function Home() {
  console.log("Hola mundo desde Next.js App");
  return (
    <div>
      <span>Hola mundo desde Next.js App</span>
      {/* boton para ir a la pagina de CSR */}
      <button onClick={() => (window.location.href = "/csr")}>Ir a CSR</button>
      {/* boton para ir a la pagina de SSG */}
      <button onClick={() => (window.location.href = "/ssg")}>Ir a SSG</button>
      {/* boton para ir a la pagina de SSR */}
      <button onClick={() => (window.location.href = "/ssr")}>Ir a SSR</button>
    </div>
  );
}
