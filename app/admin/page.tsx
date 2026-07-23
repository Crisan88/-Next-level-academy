import { redirect } from "next/navigation";
import { createClient } from "@/lib/server";
import SearchTable from "../components/SearchTable";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from("registration")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <div>Eroare: {error.message}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Next Level Academy – Admin
      </h1>

      <div className="flex items-center justify-between mb-6">
        <p className="text-lg">
          Total înscrieri: <strong>{data.length}</strong>
        </p>

        <a
          href="/api/export"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          📥 Export Excel
        </a>
      </div>

      <SearchTable data={data} />
    </div>
  );
}