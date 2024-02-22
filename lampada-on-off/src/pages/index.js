import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [estadoInterruptor, setEstadoInterruptor] = useState(false);
  const [contador, setContador] = useState(0);

  function mudarLampada() {
    if (contador < 6) {
      setEstadoInterruptor(!estadoInterruptor);
      setContador(contador + 1);
    } else {
      setEstadoInterruptor(false); 
      setContador(0); 
      
    }
  }

  return (
    <div>
      <h2>
        {
          contador< 6
          ? ` você já ligou ${contador} vez${contador==1?"" :"es"} a lâmpada`
          :"Sua lâmpada Queimou !"
        }
      </h2>
      {
        contador >= 6 
      
          ? <Image src={"/assets/lampada.png"} width={286} height={388} />
          : estadoInterruptor 
          ? <Image src={"/assets/on.png"} width={286} height={388} />
          : <Image src={"/assets/off.png"} width={286} height={388} />
        }
    <div>
    <button onClick={mudarLampada}>Interruptor</button>
    </div>
      
    </div>
  );
}
