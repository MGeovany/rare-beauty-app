import HomePage from "../pages/home.f7";
import FavoritesPage from "../pages/favorites.f7";
import BagPage from "../pages/bag.f7";
import ShopPage from "../pages/shop.f7";
import AboutPage from "../pages/about.f7";
import SettingsPage from "../pages/settings.f7";
import LocationPage from "../pages/location.f7";
import OffersPage from "../pages/offers.f7";
import ProfilePage from "../pages/profile.f7";

import DynamicRoutePage from "../pages/dynamic-route.f7";
import NotFoundPage from "../pages/404.f7";

var routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/favorites",
    component: FavoritesPage,
  },
  {
    path: "/bag/",
    component: BagPage,
  },
  {
    path: "/shop/",
    component: ShopPage,
  },
  {
    path: "/about/",
    component: AboutPage,
  },
  {
    path: "/settings/",
    component: SettingsPage,
  },
  {
    path: "/location/",
    component: LocationPage,
  },
  {
    path: "/offers/",
    component: OffersPage,
  },
  {
    path: "/profile/",
    component: ProfilePage,
  },
  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            },
          }
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
