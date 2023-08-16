import {
  Route,
  Routes
} from 'react-router-dom';
import routes from './routes';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import ConfirmedBooking from './pages/Bookings/ConfirmedBooking';
import NotFound from './pages/NotFound';
import UnderConstruction from './pages/UnderConstruction';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={routes.get('home').path} element={<Home />} />
          <Route
            path={routes.get('about').path}
            element={<UnderConstruction />}
          />
          <Route
            path={routes.get('menu').path}
            element={<UnderConstruction />}
          />
          <Route path={routes.get('bookings').path} element={<Bookings />} />
          <Route
            path={routes.get('confirmedBooking').path}
            element={<ConfirmedBooking />}
          />
          <Route
            path={routes.get('orderOnline').path}
            element={<UnderConstruction />}
          />
          <Route
            path={routes.get('login').path}
            element={<UnderConstruction />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
