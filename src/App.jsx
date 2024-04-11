import { useState } from "react";
import Product from "./Product";

export default function App() {
  let [products, setProducts] = useState([
    {
      id: 1,
      name: "iphone",
      price: 3000,
      stock: 10,
      category: "mobile",
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 2,
      name: "samsung",
      price: 3000,
      stock: 20,
      category: "mobile",
      thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    },
    {
      id: 3,
      name: "Dell Latitude",
      price: 3000,
      stock: 30,
      category: "Computer",
      thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    },
    {
      id: 4,
      name: "HP",
      price: 55000,
      stock: 10,
      category: "Computer",
      thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    },
  ]);

  let deleteHandler = (product) => {
    setProducts([
      ...products.filter(pro => {
        return pro.id !== product.id
      })
    ])
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((pro) => {
          return (
            <Product onDelete={deleteHandler} key={pro.id} product={pro}>
              {/* passing child */}
              <span className="position-absolute top-0 translate-middle badge bg-danger">
                Stock {pro.stock}
              </span>
            </Product>
          );
        })}
      </div>
    </div>
  );
}
