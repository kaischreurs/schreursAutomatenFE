import { router, BASE } from "../app";

import "./pages/notfound-page";
import "./pages/machine-page";
import "./pages/overview-page";

router.setRoutes([
  { path: `${BASE}/`, component: "overview-page" },
  {
    path: `${BASE}/machine`,
    component: "machine-page",
  },
  { path: "(.*)", component: "notfound-page" },
]);
