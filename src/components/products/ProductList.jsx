import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//bisa membuat reduxtor untuk product karna tidak butuh product ini diakses di kompoonen yang lain dan hanya ini

const ProducList = () => {
  const [products, setProducts] = useState([])

  //manggil metode getProducts didalam useefffect
  useEffect(()=>{
    getProducts();
  },[])
  //sebuah metod untuk fetcing data
  const getProducts = async()=>{
    const response = await axios.get('http://localhost:5000/products')

    //masukan response kedalam statenya
    setProducts(response.data)
  }
  
  const deleteProduct = async(productId)=>{
    await axios.delete(`http://localhost:5000/products/${productId}`)
//panggil lagi metode get prduct agar melihat perobahan interface
getProducts()
  }
  

  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">List of Products</h2>
      <Link to="/products/add" className="button is-primary mb-2">Add Neew</Link>
      <table className="table is-striped is-fullwidth">
        <thead >
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Created by</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index)=>( //setiap looping memiliki uniq key
          <tr key={product.uuid}>
            <td>{index+1}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.user.name}</td>
            <td>
              <Link to={`/products/edit/${product.uuid}`} className="button is-small is-info">Edit</Link>
              <button onClick={()=> deleteProduct(product.uuid)} className="button is-small is-danger">Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProducList;
