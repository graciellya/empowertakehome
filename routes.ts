import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [index("routes/home.tsx"), route("saved_notes", "routes/saved_notes.tsx")] satisfies RouteConfig;

