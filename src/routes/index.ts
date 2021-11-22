import symbolRoute from "./symbol.route";
import { Router } from "express";
const router = Router();
const routes = [
    {
        path: "/symbols",
        route: symbolRoute,
    },
];
routes.forEach((route) => {
    router.use(route.path, route.route);
});
export default router;
