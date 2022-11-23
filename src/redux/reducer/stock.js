const products = [];

const stock = (state = products, action) => {
  const product = action.payload;
  const qty = action.qty;
  switch (action.type) {
    case "SETPRODUCT":
      console.log("product", product);
      product.map((item) => {
        // console.log(item);
        if (!item.stock) {
          item.stock = 20;
        }
        else {
            item.stock = 1001;
        }
      });
      return product;
      break;
    case "UPDATESTOCKCART":
      return state.map((x) =>
        x.id === product ? { ...x, stock: x.stock - qty } : x
      );
      break;
    case "UPDATESTOCKADMIN":
      console.log("state:", action);
      return state.map((x) => (x.id === product ? { ...x, stock: qty } : x));
      break;
    default:
      return state;
      break;
  }
};

export default stock;
