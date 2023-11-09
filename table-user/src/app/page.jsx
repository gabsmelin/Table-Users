import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p><Link href="/">Home</Link></p>
      <p><Link href="/tabela/table-all">Tabela de usuario</Link></p>
    </div>
  )
}