import React, { useState } from 'react'
import { Catalog } from './Catalog'
import { Cart } from './Cart'
import { AddItem } from './AddItem'
import foto1 from '../assets/camara.jpg'
import foto2 from '../assets/tripie.jpg'
import foto3 from '../assets/lente.jpg'
import foto4 from '../assets/micro.jpg'

export const CatCar = () => {
    const [products, setProducts]= useState([
        {name: "cámara", id:1, quantity: 5, src:foto1, description:"cámara de la mas alta calidad"},
        {name: "tripie", id:2, quantity: 7, src:foto2, description:"tripie para cámara "},
        {name: "lente", id:3, quantity: 12,  src:foto3, description:"lente para camara"},
        {name: "microfono", id:4, quantity: 4, src:foto4, description:"microfono Maono alambrico"},
    ])
    const [productCart, setProductsCart]=useState([]);

    const addToCart = (id) =>{
      const product = products.find((product)=>(product.id==id));
      if(product.quantity==0) return;

      if(productCart.find((product)=>(product.id==id))) {
        const copyProducts = products.map((product)=>{
          if(product.id==id) { product.quantity= product.quantity-1; return product; }
          else return product;
        })
        setProducts(copyProducts);

        const copyProductCart = productCart.map((product)=>{
          if(product.id==id) { product.quantity= product.quantity+1; return product; }
          else return product;
        })
        setProductsCart(copyProductCart);
      } else {
        const copyProducts = products.map((product)=>{
          if(product.id==id) { product.quantity= product.quantity-1; return product; }
          else return product;
        })
        setProducts(copyProducts);

        const copyProduct = {...product, quantity:1};
        const copyProductCart = [ ...productCart,copyProduct ];
        setProductsCart(copyProductCart);
      }
    }

    const removeFromCart  = (id, quantity)=>{
      const copyProducts = products.map((product)=>{
          if(product.id==id) { product.quantity= product.quantity + quantity; return product; }
          else return product;
        })
        setProducts(copyProducts);

        const copyProductCart = productCart.filter((product)=>product.id!=id);
        setProductsCart(copyProductCart);
    }

  return (
    <div className="flex flex-col h-[90vh] overflow-hidden relative">
        <AddItem products={products} setProducts={setProducts}></AddItem>
        <Catalog products={products} addToCart={addToCart}></Catalog>
        <Cart productsCart={productCart} removeFromCart={removeFromCart}></Cart>
    </div>
  )
}