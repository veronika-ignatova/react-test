import Users from "./components/Users/Users";
import Form from "./components/Form/Form";

const AppRoutes = [
    {
        index: true,
        element: <Users />
    },
    {
        path: '/users',
        element: <Users />
    },
    {
        path: '/form',
        element: <Form />
    }
];

export default AppRoutes;