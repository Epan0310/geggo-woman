const API_BASE_URL = "http://localhost:5000/api";

export async function fetcher(endpoint: string) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Gagal mengambil data dari server");
  return res.json();
}
