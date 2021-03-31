import "./App.css";
import Router from "./Router";
import { SWRConfig } from "swr";
import moda from "../apis/moda";
// import { AuthProvider } from "./Auth";

const swrConfig = {
  fetcher: url => moda.open.get(url).then(res => res.data),
  shouldRetryOnError: false
};

// const App = () => {
//   return (
//     <Router/>
//   );
// }

const App = () => (
  <SWRConfig value={swrConfig}>
    <Router />
  </SWRConfig>
);

export default App;
