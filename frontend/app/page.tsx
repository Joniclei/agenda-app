"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Contato = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  observacoes: string;
};

export default function Home() {
  const router = useRouter();
  const [contatos, setContatos] = useState<Contato[]>([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/contatos`)
      .then((res) => setContatos(res.data))
      .catch((err) => console.error(err));
  }, []);

  function handleExcluir(id: number) {
    if (confirm("Deseja excluir este contato?")) {
      axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/contatos/${id}`)

        .then(() => setContatos(contatos.filter((c) => c.id !== id)));
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h2>Contatos</h2>
        <a href="/contatos/novo">
          <button className="btn-primary" style={{ marginBottom: 0 }}>+ Novo Contato</button>
        </a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Observações</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {contatos.map((contato) => (
            <tr key={contato.id}>
              <td>{contato.nome}</td>
              <td>{contato.email}</td>
              <td>{contato.telefone}</td>
              <td>{contato.endereco}</td>
              <td>{contato.observacoes}</td>
              <td>
                <a href={`/contatos/${contato.id}`}>
                  <button className="btn-edit">Editar</button>
                </a>
                <button className="btn-delete" onClick={() => handleExcluir(contato.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
