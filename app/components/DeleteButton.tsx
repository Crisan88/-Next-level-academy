"use client";

import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  id: string;
};

export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();

  async function handleDelete() {
    const ok = window.confirm(
      "Sigur dorești să ștergi această înscriere?"
    );

    if (!ok) return;

    const res = await fetch("/api/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      alert("Eroare la ștergere.");
      return;
    }

    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
    >
      🗑️ Șterge
    </button>
  );
}