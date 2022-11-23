// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}

// For Set Product
export const setProduct = (product) =>{
    return {
        type:"SETPRODUCT",
        payload:product
    }
}

// For Update Stock Cart
export const updateStockCart = (product, qty) =>{
    return {
        type:"UPDATESTOCKCART",
        payload:product, 
        qty:qty
    }
}

// For Update Stock Admin
export const updateStockAdmin = (product, qty) =>{
    return {
        type:"UPDATESTOCKADMIN",
        payload:product,
        qty:qty
    }
}
