import React from "react";
import { render } from "react-dom";

import MainRoutes from "./routes/Routes";

const Main = () => <MainRoutes />;

window.onload = () => {
  render(<Main />, document.getElementById("app"));
  module.hot.accept();
};
