import { useMediaQuery } from "react-responsive";

import Header from "./components/Header";

function App() {
  const responsive = useMediaQuery({ query: "(max-width: 690px)" });

  return (
    <>
      <Header responsive={responsive} />
    </>
  );
}

export default App;
