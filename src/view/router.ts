import { router, BASE } from "../app";
import { Router } from "@vaadin/router";

import "./pages/notfound-page";

router.setRoutes([
  {
    path: `${BASE}/index`,
    component: "index",
  },
  { path: "(.*)", component: "notfound-page" },
]);
