import * as React from "react";
import { Provider } from "react-redux";
import { Router } from "@reach/router";
import { store } from "./store";
import Header from "./components/Header/Header";
import Rockets from "./components/Rockets/Rockets";
import Dragons from "./components/Dragons/Dragons";
var App = function () { return (React.createElement(Provider, { store: store },
    React.createElement("div", { className: "app" },
        React.createElement(Header, null),
        React.createElement(Router, null,
            React.createElement(Rockets, { path: "/" }),
            React.createElement(Dragons, { path: "/edit/:id" }))))); };
export default App;
//# sourceMappingURL=App.js.map