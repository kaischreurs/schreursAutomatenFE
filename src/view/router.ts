import { router } from "../app";

import "./pages/notfound-page";
import "./pages/machine-page";
import "./pages/overview-page";

router.setRoutes([
  { path: `/`, component: "overview-page" },
  {
    path: `/machine`,
    component: "machine-page",
  },
  { path: "(.*)", component: "notfound-page" },
]);
