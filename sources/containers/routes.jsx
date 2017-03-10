import App from './App';
import HomePage from './home/Home';

export const routes = {
  path: '/',
  component: App,
  childRoutes: [
    {
      indexRoute: {
        component: HomePage
      }
    }
  ]
};
