import React from "react";
import { FiUser, FiSearch, FiShoppingCart, FiGrid } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full text-sm">
      {/* Top Nav */}
      <div className="bg-green-800 text-white py-2 px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-center">
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#" className="hover:underline">Anasayfa</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Blog Detail</a>
          <a href="#" className="hover:underline">Kategori</a>
          <a href="#" className="hover:underline">P.Detail</a>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#" className="hover:underline">İade Politikası</a>
          <a href="#" className="hover:underline">Yardım Merkezi</a>
          <a href="#" className="hover:underline">Mağaza Aç</a>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full px-4 sm:px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4 bg-white border-b">
        {/* Logo + Blog Checkbox */}
        <div className="flex items-center gap-2 w-full lg:w-auto justify-center lg:justify-start">
          <span className="text-2xl font-bold text-green-800">Logo</span>
          <label className="flex items-center gap-1 text-gray-700">
            <input type="checkbox" className="w-4 h-4" /> Blog
          </label>
        </div>

        {/* Search Bar */}
        <div className="w-full lg:flex-1 max-w-2xl flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm">
          <input
            type="text"
            placeholder="Aradığınız ürün veya markayı yazınız.."
            className="flex-1 bg-transparent focus:outline-none text-gray-700 text-sm"
          />
          <button className="text-white bg-green-700 rounded-full w-8 h-8 flex items-center justify-center">
            <FiSearch size={16} />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center justify-center lg:justify-end gap-4 w-full lg:w-auto">
          {/* Cart */}
          <div className="relative flex items-center gap-1">
            <FiShoppingCart className="text-green-800" size={20} />
            <span className="text-xs text-gray-700">SEPETİM</span>
            <span className="text-xs text-gray-500">00,00 TRY</span>
            <span className="absolute -top-1 -right-2 bg-green-700 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>

          {/* Login */}
          <button className="flex items-center gap-1 bg-green-700 text-white px-3 py-1.5 text-sm rounded">
            <FiUser /> GİRİŞ YAP <span className="text-xs ml-1 hidden sm:inline">veya kayıt ol</span>
          </button>

          {/* Language */}
          <div className="flex items-center gap-1">
            <span className="text-red-500">
              <FaRegCircle size={14} />
            </span>
            <span className="text-sm">TR</span>
          </div>
        </div>
      </div>

      {/* Bottom Categories Bar */}
      <div className="w-full border-t bg-white px-4 sm:px-6 py-3 flex items-center justify-center gap-6 flex-wrap text-gray-600 font-semibold text-sm overflow-x-auto">
        <div className="flex items-center gap-2 text-gray-700">
          <FiGrid className="text-xl" />
          <span className="font-bold">Kategoriler</span>
        </div>
        <a href="#" className="hover:text-green-700 transition-colors">İş İlanları</a>
        <a href="#" className="hover:text-green-700 transition-colors">Tablet & Telefon</a>
        <a href="#" className="hover:text-green-700 transition-colors">Aksesuar</a>
        <a href="#" className="hover:text-green-700 transition-colors">Mağazalar</a>
        <a href="#" className="hover:text-green-700 transition-colors">Elektronik</a>
        <a href="#" className="hover:text-green-700 transition-colors">Bilgisayar & Ofis</a>
      </div>
    </header>
  );
};

export default Header;
