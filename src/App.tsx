import { Header } from "./components/header/Header";
import { PokedexProvider } from "./context/PokedexProvider";
import { MainPokedexView } from "./views/MainPokedexView";

function App() {
  return (
    <PokedexProvider>
      <Header />
      <MainPokedexView />
    </PokedexProvider>
  );
}

export default App;
