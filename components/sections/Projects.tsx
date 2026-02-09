"use client";
import Image from "next/image";
import { projects } from "@/data";
import Reveal from "../shared/Reveal";

export default function Projects() {
  return (
    <section className="py-24 px-4" id="proyectos">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h3 className="text-5xl font-bold mb-12 text-white tracking-tighter">Proyectos destacados</h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, index) => {
            const isLarge = index === 0 || index === 3;
            
            return (
              <div 
                key={index} 
                className={`relative group rounded-[3rem] bg-zinc-900 border border-zinc-800/50 overflow-hidden transition-all duration-500 h-[500px] ${isLarge ? "md:col-span-8" : "md:col-span-4"}`}
              >
                <a href={project.link} target="_blank" className="block w-full h-full relative">
                  
                  {/* CONTENEDOR DE IMAGEN */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover opacity-90 transition-all duration-700 group-hover:scale-105 ${project.position || 'object-center'}`}
                    />
                    <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-500 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent z-20" />
                  </div>

                  {/* BOTÓN CENTRAL (HOVER) */}
                  <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>

                  {/* TEXTO Y DESCRIPCIÓN REFORMULADO */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-40">
                    
                    {/* Cápsula de información: Título + Descripción */}
                    <div className="inline-block p-5 rounded-[2rem] bg-black/50 backdrop-blur-md border border-white/10 mb-5 max-w-[95%] shadow-2xl">
                      <h4 className="text-2xl font-black text-white mb-2 tracking-tighter uppercase leading-none">
                        {project.title}
                      </h4>
                      <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* TAGS (Afuera de la cápsula para no saturar) */}
                    <div className="flex flex-wrap gap-2 px-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest bg-zinc-950/80 border border-white/10 rounded-full text-white backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}