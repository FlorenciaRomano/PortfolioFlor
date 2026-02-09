"use client";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-6xl mx-auto px-4 py-12 mt-20 border-t border-zinc-900">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* LADO IZQUIERDO: Logo y Copyright */}
        <div className="flex flex-col gap-4">
  {/* Logo Glassmorphism con Gradiente Azul-Morado-Rosa */}
  <div className="relative group cursor-default w-fit">
    <div className="bg-zinc-900/50 backdrop-blur-md text-white px-5 py-2 rounded-2xl w-fit font-black text-2xl italic tracking-tighter border border-transparent bg-clip-border relative">
      {/* El borde con gradiente se logra con un pseudo-elemento o un div detrás */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500" />
      
      {/* El Brillo (Glow) de fondo con los nuevos colores */}
      <div className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

      <span className="relative z-10">
        Flor<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">encia</span>
      </span>
    </div>
  </div>

  <p className="text-zinc-500 text-[13px] font-medium tracking-tight ml-1">
    © {new Date().getFullYear()} Flor. Hecho con <span className="text-purple-500 animate-pulse">❤️</span>
  </p>
</div>

        {/* LADO DERECHO: Redes y Ubicación */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          
          {/* Íconos Sociales (SVG Puro) */}
          <div className="flex items-center gap-6 text-zinc-400">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/florencia-romano-4ba3481a0/" className="hover:text-white transition-all transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/FlorenciaRomano" className="hover:text-white transition-all transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            
          </div>

          {/* Ubicación (Botón cápsula) */}
          <div className="flex items-center gap-2 text-zinc-400 text-[13px] font-semibold bg-zinc-900/40 px-5 py-2.5 rounded-full border border-zinc-800/50 hover:border-zinc-700 transition-all cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-[green] animate-pulse" />
            <span>Tucumán, Argentina</span>
          </div>
          
        </div>

      </div>
    </footer>
  );
}