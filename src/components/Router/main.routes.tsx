import App from '../../App';
import { Calendar, Debounce, KempoCards, Notifications, Pokemon, ReactQueryComponent } from '..'
import { ErrorPage } from "../../screens";
import { RouteObject } from 'react-router-dom';
import { PATHS } from './constants';

export const paths: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: PATHS.CALENDAR,
        element: <Calendar />,
        id: "Calendar"
    },
    {
        path: PATHS.DEBOUNCE,
        element: <Debounce />,
        id: "Debounce"
    },
    {
        path: PATHS.KEMPO_CARDS,
        element: <KempoCards />,
        id: "Kempo Cards"
    },
    {
        path: PATHS.NOTIFICATION,
        element: <Notifications />,
        id: "Notificaciones"
    },
    {
        path: PATHS.REACT_QUERY,
        element: <ReactQueryComponent />,
        id: "React Query"
    },
    {
        path: PATHS.POKEMON,
        element: <Pokemon />,
        id: "Pokemon"
    },
]