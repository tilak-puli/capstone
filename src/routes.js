const routes = {
  'home': {name: 'Home', path: '/', showInNav: true},
  'about': {name: 'About', path: '/about', showInNav: true},
  'menu': {name: 'Menu', path: '/menu', showInNav: true},
  'bookings': {name: 'Reservations', path: '/bookings', showInNav: true},
  'confirmedBooking': {name: 'Confirmed Booking', path: '/confirmed-booking',},
  'orderOnline': {name: 'Order Online', path: '/order-online'},
  'login': {name: 'Login', path: '/login', showInNav: true},
}

const routesMap = new Map(Object.entries(routes))

export default routesMap;

