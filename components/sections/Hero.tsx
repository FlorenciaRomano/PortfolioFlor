"use client";
import Image from "next/image"; // Importante para SEO y velocidad
import { personalInfo } from "@/data";
import Reveal from "../shared/Reveal";
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-24 gap-12">
      <div className="flex-1 space-y-8">
        <Reveal>
          <h2 className="text-white font-bold tracking-wide">
            Hey, soy <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{personalInfo.name}</span>
          </h2>
        </Reveal>
        <Reveal>
  {/* Agregamos un min-height para que el título no salte en móviles */}
  <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none min-h-[1.2em] flex flex-wrap items-center">
    <span>Frontend</span>
    
    {/* Contenedor con ancho fijo para que no empuje los botones */}
    <span className="inline-block ml-4 text-zinc-700 min-w-[300px] md:min-w-[450px]">
      <Typewriter
        words={['Dev', 'Engineer', 'Designer']}
        loop={0}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </span>
  </h1>
</Reveal>

<Reveal>
  <div className="flex gap-5 pt-4">
    {/* Botón WhatsApp */}
    <a 
      href="https://wa.me/+5493815832370?text=Hola%20Florencia,%20vi%20tu%20portfolio%20y%20me%20gustaría%20contactarte" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white text-black px-10 py-2 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 flex items-center justify-center"
    >
      Hablemos
    </a>

    {/* Botón Descargar CV */}
    <a 
      href="/cvFlorenciaRomano.pdf" 
      download="CV_Florencia.pdf"
      className="border border-zinc-800 px-10 py-2 rounded-full font-medium hover:bg-zinc-900 transition-colors text-zinc-300 flex items-center justify-center"
    >
      Descargar CV
    </a>
  </div>
</Reveal>
      </div>

      <Reveal>
  <div className="relative group">
    {/* 1. Brillo Exterior (Aura) con los colores de la paleta */}
    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
    
    {/* 2. Anillo de borde con degradado (Efecto Neon) */}
    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-[2px] bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 shadow-2xl">
      
      {/* 3. Contenedor de la imagen (el fondo oscuro interno) */}
      <div className="relative w-full h-full rounded-full bg-zinc-950 overflow-hidden">
        <Image
          src="/perfil.jpg"
          alt={`Foto de ${personalInfo.name}`}
          fill
          priority
          className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* 4. Overlay sutil para que la foto se integre al modo oscuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* 5. Badge flotante de "Online" o "Experiencia" (Opcional, estilo Derek) */}
      <div className="absolute -bottom-4 -right-4 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-xl hidden md:block animate-bounce">
         <p className="text-xs text-zinc-500 font-bold uppercase tracking-tighter">Experiencia</p>
         <p className="text-lg font-black text-white">+4 Años</p>
      </div>
    </div>
  </div>
</Reveal>
    </section>
  );
}