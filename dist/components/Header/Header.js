import * as React from "react";
import { Link } from "@reach/router";
import "./Header.scss";
var Header = function () {
    return (React.createElement("header", { className: "app__header" },
        React.createElement(Link, { className: "", to: "/" },
            React.createElement("h1", { className: "title" }, "MERN Fitness Tracker")),
        React.createElement("nav", { className: "nav" },
            React.createElement(Link, { className: "nav__link", to: "/" }, "Home"),
            React.createElement(Link, { className: "nav__link", to: "/add" }, "Add Workout"),
            React.createElement(Link, { className: "nav__link", to: "/user" }, "Add User"))));
};
export default Header;
//# sourceMappingURL=Header.js.map