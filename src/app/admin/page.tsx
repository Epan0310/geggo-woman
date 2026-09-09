"use client";

import { useEffect, useState } from "react";
import {
  Package,
  Layers,
  AlertTriangle,
  Plus,
  RefreshCw,
  Trash2,
  X,
} from "lucide-react";

interface Stats {
  totalProducts: number;
  totalCategories: number;
  totalStock: number;
  lowStockCount: number;
}

interface Variant {
  id: string;
  color: string;
  size: string;
  stock: number;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  categoryId: string;
  category: { name: string };
  variants: Variant[];
  images: { url: string }[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State untuk Tambah Baju
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [color, setColor] = useState("Natural");
  const [size, setSize] = useState("M");
  const [stock, setStock] = useState("10");

  const loadData = async () => {
    setLoading(true);
    try {
      const statsRes = await fetch("http://localhost:5000/api/admin/stats");
      const statsData = await statsRes.json();
      if (statsData.success) setStats(statsData.data);

      const prodRes = await fetch("http://localhost:5000/api/products");
      const prodData = await prodRes.json();
      if (prodData.success) setProducts(prodData.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handler: Update Stok Varian
  const handleUpdateStock = async (variantId: string, currentStock: number) => {
    const newStock = prompt(
      "Masukkan jumlah stok baru:",
      currentStock.toString(),
    );
    if (newStock === null || isNaN(Number(newStock))) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/products/variants/${variantId}/stock`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ stock: Number(newStock) }),
        },
      );
      const data = await res.json();
      if (data.success) {
        loadData();
      }
    } catch (err) {
      alert("Gagal mengubah stok");
    }
  };

  // Handler: Hapus Produk
  const handleDeleteProduct = async (
    productId: string,
    productName: string,
  ) => {
    if (!confirm(`Yakin ingin menghapus "${productName}"?`)) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/products/${productId}`,
        {
          method: "DELETE",
        },
      );
      const data = await res.json();
      if (data.success) {
        loadData();
      }
    } catch (err) {
      alert("Gagal menghapus produk");
    }
  };

  // Handler: Submit Baju Baru
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!products.length) return;

    const categoryId = products[0].categoryId;

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          price: Number(price),
          categoryId,
          images: [
            {
              url:
                imageUrl ||
                "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800",
            },
          ],
          variants: [{ color, size, stock: Number(stock) }],
        }),
      });

      const data = await res.json();
      if (data.success) {
        setIsModalOpen(false);
        setName("");
        setPrice("");
        setDescription("");
        setImageUrl("");
        loadData();
      }
    } catch (err) {
      alert("Gagal menambah baju baru");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Geggo Woman Admin
            </h1>
            <p className="text-sm text-gray-500">
              Kelola inventaris, stok baju, dan katalog produk.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition"
            >
              <Plus className="w-4 h-4" /> Tambah Baju Baru
            </button>
            <button
              onClick={loadData}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <RefreshCw className="w-4 h-4" /> Refresh
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-black text-white rounded-lg">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Produk</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.totalProducts}
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-gray-100 text-gray-800 rounded-lg">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Kategori</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.totalCategories}
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-800 rounded-lg">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Stok Keseluruhan</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.totalStock} pcs
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-amber-100 text-amber-800 rounded-lg">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Stok Menipis (≤5)</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.lowStockCount}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Product Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Daftar Produk & Manajemen Stok
            </h2>
            <p className="text-xs text-gray-500">
              Klik pada varian stok untuk mengubah angka secara cepat.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">
                  <th className="p-4">Nama Produk</th>
                  <th className="p-4">Kategori</th>
                  <th className="p-4">Harga</th>
                  <th className="p-4">Stok Varian (Klik untuk edit)</th>
                  <th className="p-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">
                      Memuat data produk...
                    </td>
                  </tr>
                ) : (
                  products.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">
                        {p.name}
                      </td>
                      <td className="p-4 text-gray-600">{p.category?.name}</td>
                      <td className="p-4 font-semibold text-gray-900">
                        Rp {p.price.toLocaleString("id-ID")}
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-2">
                          {p.variants.map((v) => (
                            <button
                              key={v.id}
                              onClick={() => handleUpdateStock(v.id, v.stock)}
                              className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer border transition hover:opacity-80 ${
                                v.stock <= 5
                                  ? "bg-amber-100 text-amber-800 border-amber-300"
                                  : "bg-gray-100 text-gray-700 border-gray-200"
                              }`}
                            >
                              {v.color} ({v.size}): <b>{v.stock}</b> ✎
                            </button>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => handleDeleteProduct(p.id, p.name)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Form Tambah Baju */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white text-gray-900 rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <h3 className="text-lg font-bold text-gray-900">
                Tambah Baju Baru
              </h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Nama Produk
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Linen Outer Cardigan"
                  className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Harga (Rp)
                </label>
                <input
                  type="number"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="299000"
                  className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Deskripsi
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Deskripsi singkat produk..."
                  className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black h-20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  URL Foto Produk
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Warna
                  </label>
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full border border-gray-300 bg-white text-gray-900 px-2 py-1.5 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Ukuran
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full border border-gray-300 bg-white text-gray-900 px-2 py-1.5 rounded-lg text-sm"
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Stok Awal
                  </label>
                  <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="w-full border border-gray-300 bg-white text-gray-900 px-2 py-1.5 rounded-lg text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition mt-4"
              >
                Simpan Produk
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
