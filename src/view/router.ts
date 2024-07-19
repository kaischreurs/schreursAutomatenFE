import { router, BASE } from "../app";

import "./pages/notfound-page";
import "./pages/machine-page";

router.setRoutes([
  {
    path: `${BASE}/machine`,
    component: "machine-page",
  },
  { path: "(.*)", component: "notfound-page" },
]);
