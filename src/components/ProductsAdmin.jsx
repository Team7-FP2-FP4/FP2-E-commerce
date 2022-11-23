import React, { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Button, Table } from "react-bootstrap";
import { setProduct } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import AdminTable from "./AdminTable";


const ProductsAdmin = () => {
  const products = useSelector((state) => state.stock)
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        console.log("aaaaaaaa");
        dispatch(setProduct(await response.clone().json()));
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="table">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = products.filter((item) => item.category === cat);
    setFilter(updatedList);
    console.log(updatedList);
  }
  const ShowProducts = () => {
    setFilter(products)
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(products)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
        <div className="table">
            <Table responsive>
                <thead>
                    <tr>
                    
                    <th>Products</th>
                    <th>Stock</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {filter.map((product,index) => 
                    <AdminTable product={product} key={index}/>
                )}
                </tbody>
                </Table>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default ProductsAdmin;
