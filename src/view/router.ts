import { router } from "../app";

import "./pages/notfound-page";
import "./pages/machine-page";
import "./pages/overview-page";
import "./pages/progress-page";

router.setRoutes([
  { path: `/`, component: "overview-page" },
  {
    path: `/automaat`,
    component: "machine-page",
  },
  {
    path: "/progress",
    component: "progress-page",
  },
  { path: "(.*)", component: "notfound-page" },
]);
