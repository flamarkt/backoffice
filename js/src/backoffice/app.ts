import BackofficeApplication from './BackofficeApplication';

// The original AdminApplication still gets created, but we override it here
// The boot method of the original will never be called
const app = new BackofficeApplication();

// @ts-expect-error Done same way as Flarum core
window.app = app;

export default app;
