import "./App.css";
import HomePage from "./component/layout";
import PledgeContextProvider from './context/modal'

function App() {
  return (
    <div className="App">
      <PledgeContextProvider>
          <HomePage />
      </PledgeContextProvider>
    </div>
  );
}

export default App;
