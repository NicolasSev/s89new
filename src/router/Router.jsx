import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Statistics from '../pages/Statistics/Statistics.jsx';
import CreatePartner from '../pages/CreatePartner/CreatePartner.jsx';
import ClientCard from '../pages/ClientCard/ClientCard.jsx';
import PartnerCard from '../pages/PartnerCard/PartnerCard.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/statistics', element: <Statistics /> },
      { path: '/create-partner', element: <CreatePartner /> },
      { path: '/client-card', element: <ClientCard /> },
      { path: '/partner-card', element: <PartnerCard /> },
    ],
  },
]);

export default routes;
