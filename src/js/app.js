import $ from "dom7";
import Framework7 from "./framework7-custom.js";

// Import F7 Styles
import "../css/framework7-custom.less";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.less";

// Import Routes
import routes from "./routes.js";
// Import Store
import store from "./store.js";

// Import main app component
import App from "../app.f7";

var app = new Framework7({
  name: "Rare Beauty App", // App name
  theme: "auto", // Automatic theme detection
  colors: {
    primary: "#863356",
    secondary: "#f2e2d3",
    tertiary: "#e6c5b3",
  },
  darkMode: false,
  el: "#app", // App root element
  component: App, // App main component
  // App store
  store: store,
  // App routes
  routes: routes,
});
