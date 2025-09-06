import React from "react";
import ReactDOM from "react-dom/client";
import { HelloComponent } from "./helloComponent";
import { printLogo } from "./logo";
import logoImg from "./content/logo.svg";
import "./mystyles.scss";

printLogo(logoImg);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<div>
    <HelloComponent />
</div>);