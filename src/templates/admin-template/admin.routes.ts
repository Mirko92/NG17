import { Routes } from '@angular/router';
import { HomePageComponent } from '../../pages/home-page/home-page.component';

export const routes: Routes = [

  // {
  //   path: "*/",
  //   redirectTo: "/Home",
  //   pathMatch: "full"
  // },

  {
    path: "Home",
    component: HomePageComponent,
    pathMatch: "full",
    title: "Home Page"
  },

  {
    path: "About",
    loadComponent: () => import("../../pages/about-page/about-page.component")
      .then(x => x.AboutPageComponent),
    pathMatch: "full",
    title: "About Page"
  },
];
