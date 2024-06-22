import { router } from "../app";

import "./pages/notfound-page";
import "./pages/machine-page";

router.setRoutes([
  {
    path: `/machine`,
    component: "machine-page",
  },
  { path: "(.*)", component: "notfound-page" },
]);
