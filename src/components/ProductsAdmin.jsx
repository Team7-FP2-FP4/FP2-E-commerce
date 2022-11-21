import React, { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Button, Table } from "react-bootstrap";

const ProductsAdmin = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
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
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
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
                {filter.map((product) => {
                    return (
                        <tr>
                        <td>
                            <div class="row">
                                <div class="col-4">
                                <img
                                className="p-3 img-fluid w-25"
                                src={product.image}
                                alt="product"
                                />
                                </div>
                                <div className="col-6">
                                    <h5>
                                        {product.title}
                                    </h5>
                                    <p>
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                            <div>
                                <input
                                type='text'
                                />
                                <div>
                                <Button>
                                    +
                                    </Button>
                                <Button>
                                    -
                                    </Button>
                                </div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <Button>
                            Update
                            </Button>
                        </td>
                        </tr>
                    );
                })}
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
