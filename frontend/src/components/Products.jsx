import { useState, useEffect } from "react";
import Card from "./Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = "http://localhost:5000/api/products";
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  // fetch('mock.codes/500')
  //   .then(response => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  //   .catch((error) => {
  //     console.log('Hubo un problema con la petición Fetch:' + error.message);
  //   })

  return (
    <div className="bg-gray-500 m-4 p-4">
      <h1 className="text-3xl text-center text-slate-300 font-bold">
        Product List
      </h1>

      {loading && (
        <p className="text-xl text-center text-slate-300">Cargando...</p>
      )}

      {error && (
        <p className="text-xl text-center text-red-500">{error.message}</p>
      )}

      {products.length > 0 && (
        <div className="bg-slate-800 p-4 text-slate-100 flex gap-4 flex-wrap justify-center">
          {products.map((item) => {
            return <Card key={item.id} product={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
