import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as Sentry from "@sentry/angular-ivy";
import { BrowserTracing } from '@sentry/angular-ivy';

Sentry.init({
  dsn: 'https://3e69e9e3bb9da06e258ed380e596eee9@o4505916480618496.ingest.sentry.io/4506346363289600',
  tracesSampleRate: 1.0,
  environment: 'develop',
  integrations: [
    new BrowserTracing({
      tracingOrigins: [],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
});



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
