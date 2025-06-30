import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
<>
  <div className="h-screen w-full flex items-center justify-center">
     <div className="flex flex-col items-center justify-center h-screen max-w-2xl gap-9">
      
      <h1 className="text-4xl font-bold">Bem vindo a Calculadora RPV</h1>
      <h2 className="text-xl font-bold">Projeto next.js + Tailwind + shadon + integração backend</h2>
    
    <p className="leading-relaxed text-lg text-center">Este projeto foi criado para demonstrar uma calculadora de operações matematicas
      integrando frontend moderno com backend externo, utilizando as melhores paráticas do 
      ecossistema React/Next.js
    </p>
    
    <Button>Ir para a Calculadora</Button>
    
    </div>
  </div>
</>
  );
}
