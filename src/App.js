import categories from "./Raw/categories.json";

import Directory from "./components/directory/directory";
const App = () => {
  return <Directory categories={categories} />;
};

export default App;
