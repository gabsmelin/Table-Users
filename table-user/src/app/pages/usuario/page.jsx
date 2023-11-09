"use client";
import { useRouter } from "next/navigation";
import { TabelaUm } from "@/components/user/user"
export default function MinhaOutraPagina() {
  return(
    <div>
        <h1>Minha outra pagina</h1>
        <TabelaUm />
    </div>
  )
};