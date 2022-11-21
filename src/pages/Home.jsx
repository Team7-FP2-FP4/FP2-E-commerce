import { Navbar, Product, ProductAdmin} from "../components";

function Home() {

  const token = sessionStorage.getItem('Auth Token');

  return (
    <>
      <Navbar />
      {token === '1' || token === null ? (
        <Product />
      ) : (
        <ProductAdmin />
      )}
    </>
  )
}

export default Home