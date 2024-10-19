import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [cards, setcards] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCard();
        setcards(response);
        console.log(cards);
      } catch (error) {
        console.log("Error al pedir");
      }
    }
  }, []);

  return (
    <>
      <section>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </section>
    </>
  );
}

export default App;
