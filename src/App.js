import './App.css';
import Cart from "./pages/Cart";
import store from './store/store'
import {Provider} from "react-redux";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  return (
    <Provider store={store}>
      <RestaurantMenu />
    </Provider>
  );
}

export default App;
