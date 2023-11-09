"use client";
import { useRouter } from "next/navigation";
import React from 'react'
export async function TabelaUm() {
  const router = useRouter();
  const { id } = router.query;
  const response = await fetch('http://localhost:3000/api/base/'+{id})
  const usuarios = await response.json();
  console.log(usuarios)
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Senha</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((item, indice) => (
                        <tr key={indice}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.senha}</td>
                            <td>{item.telefone}</td>
                            {/* <td><Link href={`/api/base/${item.id}`}>Acessar</Link></td> */}
                        </tr>
                    ))  
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="5">Usuários</td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}