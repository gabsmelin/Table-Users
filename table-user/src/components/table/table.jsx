import React from 'react'
import Link from 'next/link';

export async function TabelaDados() {

  const response = await fetch('http://localhost:3000/api/base/all-users')
  const usuarios = await response.json();
  console.log(usuarios)
    
  return (
    <div>
        <h1>Lista de usuários</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Senha</th>
                    <th>Telefone</th>
                    <th>Perfil</th>
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
                            <td><Link
                                href={{
                                    pathname: `/pages/usuario`,
                                    query: { id: item.id },
                                }}>Acessar</Link>
                            </td>
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
