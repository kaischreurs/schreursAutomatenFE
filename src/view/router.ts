import { router, BASE } from "../app";

import "./pages/notfound-page";
import "./pages/machine-page";

router.setRoutes([
  { path: `${BASE}/`, component: "machine-page" },
  {
    path: `${BASE}/machine`,
    component: "machine-page",
  },
]);
