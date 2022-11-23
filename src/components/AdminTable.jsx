import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateStockAdmin } from "../redux/action";

export default function AdminTable ({product}) {

    const [stock, setstock] = useState(product.stock);
    const dispatch = useDispatch();

    // const updateStock = (id) => {
    //     dispatch(updateStockAdmin(id, stock));
    // }

    const handleChange = (e) => {
        // e.preventDefault()
        setstock(e.target.value);
        console.log(stock);
        // dispatch(updateStockAdmin(product.id, product.stock));
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateStockAdmin(product.id, stock));
        console.log("stock:", stock);
        console.log(product);
    }

    // const updateStock = (id) => {
    //     dispatch(updateStockAdmin(id, stock));
    // }
    
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
                type='number'                
                value={stock}
                onChange={handleChange}
                />
            </div>
            </div>
        </td>
        <td>
          <Button onClick={handleUpdate}>
            Update
          </Button>
        </td>
        </tr>
    );
}