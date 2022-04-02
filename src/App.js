import Main from "./component/main";
import { useMediaQuery } from "@mui/material";
import ResponsiveEntry from "./responsiveComponent/main";
function App() {
  const responsive = useMediaQuery("(max-width:500px)");
  return (
    <div className="App">{responsive ? <ResponsiveEntry /> : <Main />}</div>
  );
}

export default App;
