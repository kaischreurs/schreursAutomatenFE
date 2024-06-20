import { Router } from "@vaadin/router";

console.log(import.meta.env.MODE);

const BASE = import.meta.env.BASE_URL ?? "/"; // see vite.config.js for the BASE_URL
const output = document.querySelector("#output");
const router = new Router(output);

export { router, BASE };
