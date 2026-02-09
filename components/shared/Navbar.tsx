"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo con degradado Gaming */}
        <Link href="/" className="group relative">
          <span className="text-2xl font-black tracking-tighter bg-white from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            Florencia
          </span>
          {/* Brillo sutil debajo del logo */}
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
        </Link>
        
        {/* Links centrales */}
        <div className="hidden md:flex gap-10 text-sm font-medium">
          {["Proyectos", "Trayectoria", "Contacto"].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-zinc-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-pink-500 group-hover:w-full transition-all" />
            </Link>
          ))}
        </div>

        {/* Botón Hablemos estilo Gaming */}
      {/* Botón WhatsApp */}
    <a 
      href="https://wa.me/+5493815832370?text=Hola%20Florencia,%20vi%20tu%20portfolio%20y%20me%20gustaría%20contactarte" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white text-black px-10 py-2 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 flex items-center justify-center"
    >
      Hablemos
    </a>
      </div>
    </nav>
  );
}