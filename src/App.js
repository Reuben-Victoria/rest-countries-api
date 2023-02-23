import { DataProvider } from "./context/GlobalContext";
import { Router } from "./router";

function App() {
  return (
    <div >
      <DataProvider>
     <Router/>
     </DataProvider>
    </div>
  );
}

export default App;
