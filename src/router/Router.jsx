import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Statistics from '../pages/Statistics/Statistics.jsx';
import CreatePartner from '../pages/CreatePartner/CreatePartner.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/statistics', element: <Statistics /> },
      { path: '/create-partner', element: <CreatePartner /> },
    ],
  },
]);

export default routes;
