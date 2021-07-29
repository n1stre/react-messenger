import React from "react";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./styles/normalize.css";
import "./styles/global.scss";

import Pages from "./pages";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Pages />
    </QueryClientProvider>
  </React.StrictMode>
);

render(<App />, document.getElementById("root"));
