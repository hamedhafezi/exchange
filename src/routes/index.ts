import { Router } from "express";
import adminRouter from "./admin.route";
import symbolRouter from "./symbol.route";
import { IRoute } from "../interfaces/route";

const router = Router();
const routes: IRoute[] = [
    {
        path: "/symbols",
        route: symbolRouter,
    },
    {
        path: "/admin",
        route: adminRouter,
    },
];
routes.forEach((route) => {
    router.use(route.path, route.route);
});
export default router;
