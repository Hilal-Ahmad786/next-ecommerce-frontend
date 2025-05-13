import React from "react";
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";


const Header = () => {
  return (
    <header className="w-full text-sm">
      {/*  Üst Menü Çubuğu */}
      <div className="bg-green-800 text-white py-2 px-6 flex justify-between items-center">
        {/* Sol menü: Sayfa linkleri */}
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Anasayfa</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Blog Detail</a>
          <a href="#" className="hover:underline">Kategori</a>
          <a href="#" className="hover:underline">P.Detail</a>
        </div>

        {/* Sağ menü: Yardım ve mağaza aç */}
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:underline">İade Politikası</a>
          <a href="#" className="hover:underline">Yardım Merkezi</a>
          <a href="#" className="hover:underline">Mağaza Aç</a>
        </div>
      </div>

      {/*  Logo, arama kutusu ve kullanıcı paneli */}
      <div className="w-full px-6 py-4 flex flex-wrap items-center justify-between gap-4 bg-white border-b">
        {/* Sol: Logo ve Blog kutusu */}
        <div className="flex items-center gap-2">
  {/* Sadece yazı olarak logo */}
  <span className="text-2xl font-bold text-green-800">Logo</span>

  {/* Blog kutucuğu */}
  <label className="flex items-center gap-1 text-gray-700">
    <input type="checkbox" className="w-4 h-4" /> Blog
  </label>
</div>


        {/* Orta: Arama kutusu */}
        <div className="flex-1 max-w-2xl mx-auto flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm">
          <input
            type="text"
            placeholder="Aradığınız ürün veya markayı yazınız.."
            className="flex-1 bg-transparent focus:outline-none text-gray-700 text-sm"
          />
          <button className="text-white bg-green-700 rounded-full w-8 h-8 flex items-center justify-center">
            <FiSearch size={16} />
          </button>
        </div>

        {/* Sağ: Sepet, Giriş, Dil */}
        <div className="flex items-center gap-4">
{/* Sepet alanı */}
<div className="relative flex items-center">
  {/* Sepet ikonu */}
  <div className="relative">
    <FiShoppingCart className="text-green-800" size={22} />

    {/* Sepet üzerindeki sayı */}
    <span className="absolute -top-2 -right-2 bg-green-700 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center shadow-sm">
      0
    </span>
  </div>

  {/* Sepet metni ve tutar */}
  <div className="ml-2 flex flex-col leading-tight">
    <span className="text-sm text-gray-700 font-medium">SEPETİM</span>
    <span className="text-xs text-gray-500">00,00 TRY</span>
  </div>
</div>


          {/* Giriş yap butonu */}
          <button className="flex items-center gap-1 bg-green-700 text-white px-3 py-1.5 text-sm rounded">
            <FiUser /> GİRİŞ YAP <span className="text-xs ml-1">veya kayıt ol</span>
          </button>

          {/* Dil seçimi */}
          <div className="flex items-center gap-1">
            <span className="text-red-500">
              <FaRegCircle size={14} />
            </span>
            <span className="text-sm">TR</span>
          </div>
        </div>
      </div>
{/* 🔻 Kategori Menüsü */}
<div className="w-full border-t bg-white shadow-sm">
  <div className="w-full max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-8 text-gray-800 font-semibold text-sm">
    {/* Kategori başlığı ikonlu */}
    <div className="flex items-center gap-2 text-gray-900">
      <FiGrid className="text-lg" />
      <span className="font-bold">Kategoriler</span>
    </div>
    {/* Diğer kategori linkleri */}
    <a href="#" className="hover:text-green-700 transition-colors">İş İlanları</a>
    <a href="#" className="hover:text-green-700 transition-colors">Tablet & Telefon</a>
    <a href="#" className="hover:text-green-700 transition-colors">Aksesuar</a>
    <a href="#" className="hover:text-green-700 transition-colors">Mağazalar</a>
    <a href="#" className="hover:text-green-700 transition-colors">Elektronik</a>
    <a href="#" className="hover:text-green-700 transition-colors">Bilgisayar & Ofis</a>
  </div>
</div>



    </header>
  );
};

export default Header;
