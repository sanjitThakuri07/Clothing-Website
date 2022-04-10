import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";

import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/sign-in";
import Shop from "./routes/shop/shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index={true} element={<Home />} exact></Route>
        <Route path="shop" element={<Shop />} exact></Route>
        <Route path="sign-in" element={<SignIn />} exact></Route>
      </Route>
    </Routes>
  );
};

export default App;
