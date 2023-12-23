import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { WithParametersPageComponent } from '../pages/with-parameters-page/with-parameters-page.component';
import { TestSignalsPageComponent } from '../pages/test-signals-page/test-signals-page.component';
import { TestHttpPageComponent } from '../pages/test-http-page/test-http-page.component';
import { TestLifeCyclePageComponent } from '../pages/test-life-cycle-page/test-life-cycle-page.component';


export const routes: Routes = [

  {
    path: "",
    redirectTo: "/Home",
    pathMatch: "full"
  },

  {
    path: "Home",
    component: HomePageComponent,
    title: "Home Page"
  },

  {
    path: "WithParameters/:message",
    component: WithParametersPageComponent,
    title: "Parameters Page"
  },
  
  {
    path: "TestSignals",
    component: TestSignalsPageComponent,
    title: "TestSignals Page"
  },
  
  {
    path: "TestHttp",
    component: TestHttpPageComponent,
    title: "TestHttp Page"
  },
  
  {
    path: "TestLifeCycle",
    component: TestLifeCyclePageComponent,
    title: "Test Life Cycle Page"
  },

  {
    path: "About",
    // component: AboutPageComponent,
    loadChildren: () => import("../pages/about-page/about-page.component")
      .then(x => x.AboutPageComponent),
    pathMatch: "full",
    title: "About Page"
  },

  {
    path: "Admin",
    loadChildren: () => import("../templates/admin-template/admin.routes").then(x => x.routes)
  },

  {
    path: "**",
    loadComponent: () => import("../pages/not-found-page/not-found-page.component")
      .then(x => x.NotFoundPageComponent),
  }

];
