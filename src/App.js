import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import ProductsNavigationBar from "./components/ProductsNavigationBar";
import ShowBagsContainer from "./components/ShowBagsContainer";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="apply-black-background-color app-main-container">
      <Header />
      <ProductsNavigationBar />
      <ShowBagsContainer />
      <Reviews />
    </div>
  );
}

export default App;
