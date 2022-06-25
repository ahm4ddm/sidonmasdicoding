import {Router} from '@vaadin/router';

class Route {
  constructor() {
    const outlet = document.getElementById('outlet');
    const router = new Router(outlet);
    router.setRoutes([
      {path: '/', component: 'my-main'},
      {path: '/about', component: 'about-page'},
      {path: '(.*)', component: 'x-not-found-view'},
    ]);
  }
}
export default Route;

