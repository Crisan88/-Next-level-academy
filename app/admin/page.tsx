import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function AdminPage() {
  const { data, error } = await supabase
    .from("registration")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    return <div>Eroare: {error.message}</div>;
  }

  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Next Level Academy - Admin
      </h1>

      <table className="w-full bg-white border">
        <thead>
          <tr className="bg-red-600 text-white">
            <th className="p-3">Copil</th>
            <th className="p-3">An</th>
            <th className="p-3">Părinte</th>
            <th className="p-3">Telefon</th>
            <th className="p-3">Email</th>
            <th className="p-3">Grupă</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item: any) => (
            <tr key={item.id} className="border-b">
              <td className="p-3">{item.child_name}</td>
              <td className="p-3">{item.birth_year}</td>
              <td className="p-3">{item.parent_name}</td>
              <td className="p-3">{item.phone}</td>
              <td className="p-3">{item.email}</td>
              <td className="p-3">{item.group_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}