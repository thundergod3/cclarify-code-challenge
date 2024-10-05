import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainRoute from "./pages";

const App = () => {
  return (
    <Suspense fallback={<></>}>
      <Router>
        <MainRoute />
      </Router>
    </Suspense>
  );
};

export default App;
