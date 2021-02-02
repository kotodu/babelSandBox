import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.render(App, root);

/**
 * @summary body全体のデザイン適用
 */
document.body.classList.add("bg-green-100", "text-center");
