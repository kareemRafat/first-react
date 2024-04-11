import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Product() {
  // let products = ['iphone' , 'samsung' , 'sony' , 'realme'];
  let [counter, setCounter] = useState(0);
  let [username, setUsername] = useState("ahmed");
  let [products, setProducts] = useState([
    "iphone",
    "samsung",
    "sony",
    "realme",
  ]);
  let [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  let deleteItem = (item) => {
    // The easiest way to remove an item from an array is to filter it out.
    // In other words, you will produce a new array that will not contain that item
    setProducts(
      products.filter((pro) => {
        return pro != item;
      })
    );
  };

  return (
    <div>
      <h1 style={{ color: "dodgerblue" }}>Products</h1>
      <hr />
      {products.length == 0 && <h2> no product to be presented </h2>}
      <ul>
        {products.map((product) => (
          <li key={product}>
            {product}
            {/* change array state - remove */}
            <button onClick={() => deleteItem(product)}>delete</button>
          </li>
        ))}
      </ul>
      {/* change array state - add */}
      <button onClick={() => setProducts([...products, "oppo"])}>click</button>

      <hr />
      <p>{counter}</p>
      {/* modifiy state with reasignment */}
      <button onClick={() => setCounter(() => counter + 10)}>increment</button>
      <hr />
      <p>{username}</p>
      {/* modify state with another value */}
      <button onDoubleClick={() => setUsername("kareem")}>change</button>

      <hr />

      {/* modify object state */}
      <div
        onPointerMove={(e) => {
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }}
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          background: "lightgray",
        }}
      >
        <span
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            background: "red",
            borderRadius: "50%",
            translate: `${position.x}px ${position.y}px`,
          }}
        ></span>
      </div>
    </div>
  );
}
