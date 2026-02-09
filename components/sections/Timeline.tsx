"use client";
import { experiences } from "@/data";
import Reveal from "../shared/Reveal";

export default function Timeline() {
  return (
    <section className="py-24 relative" id="trayectoria">
      <Reveal>
        <p className="text-zinc-500 text-sm uppercase tracking-[0.3em] mb-3 text-center">Trayectoria</p>
        <h3 className="text-5xl font-bold mb-20 text-center text-white">
          Experiencia <span className="text-zinc-700">Profesional</span>
        </h3>
      </Reveal>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Línea central Vertical (Visible solo en Desktop) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-20 hidden md:block" />

        <div className="space-y-20">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between group`}>
                
                {/* 1. Bloque de Contenido */}
                <div className={`w-full md:w-[45%] ${isEven ? 'md:order-1' : 'md:order-3'}`}>
                  <Reveal width="100%">
                    <div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-zinc-800 hover:border-pink-500/50 transition-all duration-500 backdrop-blur-md relative overflow-hidden group">
                      
                      {/* Glow de fondo en la tarjeta al hacer hover */}
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-600/10 blur-[50px] group-hover:bg-purple-600/20 transition-colors" />

                      <span className="inline-block px-4 py-1 rounded-full bg-zinc-800 text-[10px] font-bold text-pink-500 border border-pink-500/20 mb-4 uppercase tracking-tighter">
                        {exp.date}
                      </span>

                      <h4 className="text-3xl font-black text-white mb-1 tracking-tighter">
                        {exp.company}
                      </h4>
                      
                      <p className="text-zinc-400 font-medium mb-4 text-sm uppercase tracking-widest">
                        {exp.role}
                      </p>
                      
                      <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                        {exp.description}
                      </p>

                      {/* SKILLS - Aquí es donde estaba el error de repetición */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="text-[10px] font-bold text-zinc-300 px-3 py-1 bg-zinc-950 rounded-md border border-zinc-800 group-hover:border-blue-500/40 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* 2. El Círculo Conector Central (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-10 md:order-2">
                  <div className="w-4 h-4 rounded-full bg-zinc-950 border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] group-hover:scale-125 transition-transform" />
                </div>

                {/* 3. Espaciador Invisible (Desktop) */}
                <div className={`hidden md:block w-[45%] ${isEven ? 'md:order-3' : 'md:order-1'}`} />

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}