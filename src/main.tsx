import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "@/styles/global-styles";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/services/apollo-client";
import { ToastContainer } from "react-toastify";
import RouterProviderWrapper from "./providers/router-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <RouterProviderWrapper />
        <ToastContainer autoClose={500} />
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
