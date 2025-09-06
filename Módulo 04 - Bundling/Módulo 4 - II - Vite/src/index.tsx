import React from "react";
import { createRoot } from "react-dom/client";
import { MessageComponent } from "./message-component";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <MessageComponent />
    </div>
);
