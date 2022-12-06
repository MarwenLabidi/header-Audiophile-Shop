import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const mountHeader = (el) => {
        ReactDOM.createRoot(el).render(
                <React.StrictMode>
                        <App />
                </React.StrictMode>
        );
};

if (!window.containerContext) {
  mountHeader(document.getElementById("root"));
}

export { mountHeader };
