import "./App.css";
import BootLoader from "./components/BootLoader";
import MainContainer from "./components/MainContainer";
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <LoadingProvider>
      <BootLoader />
      <MainContainer />
    </LoadingProvider>
  );
};

export default App;
