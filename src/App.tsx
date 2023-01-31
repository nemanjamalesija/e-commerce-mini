import Nav from './components/Nav';
import Cart from './components/Cart';
import SearchProducts from './components/SearchProducts';
import { useGlobalContext } from './context';
import TotalPrice from './components/TotalPrice';
import ParentSingleProduct from './components/ParentSingleProduct';
import GoToCart from './components/GoToCart';

function App() {
  const { showCart } = useGlobalContext();

  return (
    <main className="section section-meals">
      <Nav />
      {!showCart && <SearchProducts />}
      {showCart && <Cart />}
      {!showCart && <ParentSingleProduct />}
      {!showCart && <GoToCart />}
      <TotalPrice />
    </main>
  );
}

export default App;
