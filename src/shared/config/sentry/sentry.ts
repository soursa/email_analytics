import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://85eeb7592e394b9d906e1b90489ce1ee@o4505597544890368.ingest.sentry.io/4505597549215744',
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ['localhost', 'https:yourserver.io/api/'],
    }),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
