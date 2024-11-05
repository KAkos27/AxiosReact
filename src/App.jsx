import { useContext } from "react";
import { WebshopContextProvider } from "./store/webshop-context";

function App() {
  const { items } = useContext();

  console.log(items);
  return (
    <WebshopContextProvider>
      {items.map((item, i) => (
        <div key={i} className="card">
          <img src={item.image} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <strong>$ {item.price}</strong>
          <button>Kosárba</button>
        </div>
      ))}
    </WebshopContextProvider>
  );
}

export default App;
