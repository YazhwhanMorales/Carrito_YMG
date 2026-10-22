import { useState } from "react";
import React from 'react';

export const AddItem = ({ products, setProducts }) => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    src: null,
    quantity: 1,
    id: Date.now()
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setProduct({ ...product, src: imageUrl });
    }
  };

  const agregarEquipo = (e) => {
    e.preventDefault();
    const copyProducts = [...products, { ...product, id: Date.now() }];

    setProducts(copyProducts);
    setProduct({
      name: "",
      description: "",
      src: null,
      quantity: 1,
      id: Date.now()
    });
    setImage(null);
    setVisible(false);
  };

  return (
    <>
      <button
        onClick={() => setVisible(!visible)}
        className="absolute top-10 right-6 z-30 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-medium text-sm px-3 py-1.5 rounded-lg shadow transition-all flex items-center gap-2 cursor-pointer"
      >
        <span>+ Agregar equipo</span>
      </button>

      {visible && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={() => setVisible(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-1/3 md:w-1/4 bg-white shadow-2xl z-50 p-5 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="overflow-y-auto">
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
            <h2 className="text-base font-bold text-gray-800">Agregar nuevo equipo</h2>
            <button
              onClick={() => setVisible(false)}
              className="text-gray-400 hover:text-gray-700 text-lg font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

          <form id="add-item-form" className="flex flex-col gap-3 text-sm" onSubmit={agregarEquipo}>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium text-gray-700 mb-1">Nombre:</label>
              <input
                id="name"
                type="text"
                name="nombre"
                placeholder="Nombre del equipo"
                className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none"
                required
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="descripcion" className="font-medium text-gray-700 mb-1">Descripción:</label>
              <textarea
                id="descripcion"
                name="descripcion"
                placeholder="Describe el equipo"
                className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none resize-none h-20"
                required
                value={product.description}
                onChange={(e) => setProduct({ ...product, description: e.target.value })}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="cantidad" className="font-medium text-gray-700 mb-1">Cantidad:</label>
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                placeholder="Cantidad"
                className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none"
                min={1}
                required
                value={product.quantity}
                onChange={(e) => setProduct({ ...product, quantity: Number(e.target.value) })}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="imagen" className="font-medium text-gray-700 mb-1">Imagen:</label>
              <input
                id="imagen"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="border border-gray-300 p-1.5 rounded text-xs text-gray-600 focus:outline-none"
                name="imagen"
                required
              />
            </div>

            {image && (
              <div className="flex justify-center my-1 border rounded p-2 bg-gray-50">
                <img src={image} alt="Vista previa" className="w-24 h-24 object-contain" />
              </div>
            )}
          </form>
        </div>

        <button
          type="submit"
          form="add-item-form"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg shadow active:scale-95 transition-all cursor-pointer mt-4"
        >
          Guardar equipo
        </button>
      </div>
    </>
  );
};