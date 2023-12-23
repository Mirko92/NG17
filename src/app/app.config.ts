import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

import { MsalModule } from "@azure/msal-angular";
import { PublicClientApplication, InteractionType, BrowserCacheLocation } from "@azure/msal-browser";
import { TemplatePageTitleStrategy } from '../utils/title.strategy';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes, 
      withComponentInputBinding(),
    ),

    /* This handle "title" update on routing events */
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy
    },

    /* MSAL configuration: TODO: Check */
    importProvidersFrom(
      MsalModule.forRoot(
        new PublicClientApplication(
          {
            auth: {
              clientId   : "e052078f-08c9-4197-8791-47cc585ee177",
              authority  : "https://login.microsoftonline.com/410c9be1-35de-42ad-8041-1fdf9413e05b",
              redirectUri: "/",
            },
            cache: {
              cacheLocation: BrowserCacheLocation.LocalStorage,
            }
          },
        ),
        { 
          interactionType: InteractionType.Redirect 
        },
        {
          interactionType: InteractionType.Redirect,
          protectedResourceMap: new Map()
        }
      )
    )
  ],

};
