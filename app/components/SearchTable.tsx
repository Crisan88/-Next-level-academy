"use client";

import { useMemo, useState } from "react";
import DeleteButton from "./DeleteButton";

type Registration = {
  id: string;
  child_name: string;
  birth_year: number;
  parent_name: string;
  phone: string;
  email: string;
  created_at: string;
};

export default function SearchTable({
  data,
}: {
  data: Registration[];
}) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const text = search.toLowerCase();

    return data.filter((item) => {
      return (
        item.child_name.toLowerCase().includes(text) ||
        item.parent_name.toLowerCase().includes(text) ||
        item.phone.toLowerCase().includes(text) ||
        item.email.toLowerCase().includes(text)
      );
    });
  }, [search, data]);

  return (
    <>
      <input
        type="text"
        placeholder="🔍 Caută copil, părinte, telefon sau email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg p-3 mb-5"
      />

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Copil</th>
            <th className="border p-2">An naștere</th>
            <th className="border p-2">Părinte</th>
            <th className="border p-2">Telefon</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Data</th>
            <th className="border p-2">Acțiuni</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.child_name}</td>
              <td className="border p-2">{item.birth_year}</td>
              <td className="border p-2">{item.parent_name}</td>
              <td className="border p-2">{item.phone}</td>
              <td className="border p-2">{item.email}</td>
              <td className="border p-2">
                {new Date(item.created_at).toLocaleString("de-DE")}
              </td>
              <td className="border p-2 text-center">
                <DeleteButton id={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}