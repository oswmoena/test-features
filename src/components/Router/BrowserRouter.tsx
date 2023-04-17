import { createBrowserRouter } from "react-router-dom";
import App from '../../App';
import ErrorPage from '../../screens/404/404';
import { Notifications } from "../notifications-sonner/Notifications";
import { Calendar } from "../calendar-rdp/Calendar";
import { Debounce } from "../debounce/Debounce";
import { ReactQueryComponent } from "../react-query/ReactQueryComponent";
import { KempoCards } from "../kempo-cards/KempoCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/notifications",
    element: <Notifications />
  },
  {
    path: "/calendar",
    element: <Calendar />
  },
  {
    path: "/debounce",
    element: <Debounce />
  },
  {
    path: "/react-query",
    element: <ReactQueryComponent />
  },
  {
    path: "/kempo-cards",
    element: <KempoCards />
  }
]);

export default router;