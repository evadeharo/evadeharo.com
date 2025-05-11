// import ShuffleContainer from "./components/ShuffleContainer";
import LayoutContent from "./components/LayoutContent";
import { mockedData } from "./mock/data"

function App() {
  return (
    <div className="h-screen w-full bg-gray overflow-hidden relative">
      <LayoutContent mockedData={mockedData}  />
      {/* <ShuffleContainer items={mockedData.items} /> */}
    </div>
  );
}

export default App;
