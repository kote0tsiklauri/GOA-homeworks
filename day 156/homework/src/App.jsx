import Counter from "./Counter";
import CookieClicker from "./CookieClicker";
import ToggleText from "./ToggleText";
import OnOffButton from "./OnOffButton";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6 items-start">
      <Counter />
      <CookieClicker />
      <ToggleText />
      <OnOffButton />
    </div>
  );
}

export default App;