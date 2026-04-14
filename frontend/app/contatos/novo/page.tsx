"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function NovoContato() {
  const router = useRouter();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    observacoes: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contatos`, form)
      .then(() => router.push("/"))
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h2>Novo Contato</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input type="text" name="nome" value={form.nome} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <label>Telefone</label>
          <input type="text" name="telefone" value={form.telefone} onChange={handleChange} />
        </div>
        <div>
          <label>Endereço</label>
          <input type="text" name="endereco" value={form.endereco} onChange={handleChange} />
        </div>
        <div>
          <label>Observações</label>
          <input type="text" name="observacoes" value={form.observacoes} onChange={handleChange} />
        </div>
        <button type="submit" className="btn-submit">Salvar</button>
      </form>
    </div>
  );
}
