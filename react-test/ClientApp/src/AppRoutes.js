import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import {Layout} from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/users',
        element: <Users />
    },
    {
        path: '/create',
        element: <Form />
    },
    {
        path: '*',
        element: <NotFound />
    }
];

export default AppRoutes;