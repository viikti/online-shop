import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/Router";
import { Provider } from "react-redux";
import { persistor, store } from "./Store/configureStore";
import { PersistGate } from "redux-persist/integration/react";

import { persistStore } from "redux-persist";
import MainLayout from "./commonComponents/MainLayouts";
import { BrowserRouter } from "react-router-dom";

// const persistor = persistStore(store);

// import "./Static/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainLayout>
          <Router />
        </MainLayout>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
