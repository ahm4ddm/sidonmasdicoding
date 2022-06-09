import {Router} from '@vaadin/router';
import './pages/register';
import './pages/login';
import './pages/donation';
import './pages/about';

class App {
  constructor() {
    const outlet = document.getElementById('outlet');
    const router = new Router(outlet);
    router.setRoutes([
      {path: '/', component: 'my-main'},
      {path: '/login', component: 'login-page'},
      {path: '/register', component: 'register-page'},
      {path: '/donasi', component: 'donation-page'},
      {path: '/about', component: 'about-page'},
      {path: '(.*)', component: 'x-not-found-view'},
    ]);
  }
}
export default App;
