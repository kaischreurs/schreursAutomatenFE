import { router } from "../app";

import "./pages/notfound-page";
import "./pages/machine-page";
import "./pages/overview-page";
import "./pages/progress-page";
import "./pages/product-page";
import "./pages/nav-page";
import "./pages/contact-page";

router.setRoutes([
  { path: `/`, component: "overview-page" },
  {
    path: `/automaat`,
    component: "machine-page",
  },
  {
    path: `/product`,
    component: "product-page",
  },
  {
    path: "/contact",
    component: "contact-page",
  },
  {
    path: "/nav",
    component: "nav-page",
  },
  {
    path: "/progress",
    component: "progress-page",
  },
  { path: "(.*)", component: "notfound-page" },
]);
