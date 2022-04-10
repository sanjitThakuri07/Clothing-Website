import React from "react";

import categories from "../../Raw/categories.json";

import Directory from "../../components/directory/directory";
const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
