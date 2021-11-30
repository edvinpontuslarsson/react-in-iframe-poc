const id = (elementId) => document.getElementById(elementId);

const app = id('app-iframe');

if (window.location.origin.includes('file')) {
  app.setAttribute('src', 'http://localhost:3000/app');
} else {
  app.setAttribute('src', '/app');
}
