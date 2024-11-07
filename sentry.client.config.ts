// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e1509e29e3e48b39dd6d0efcb076d2ee@o4508226360901632.ingest.us.sentry.io/4508226368241664",
  replaysOnErrorSampleRate: 0.1,
  replaysSessionSampleRate: 1.0,
  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  integrations:[
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark"
    })
  ],

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
