const id = (elementId) => document.getElementById(elementId);

const app = id('app-iframe');

const locationPath = window.location.pathname || window.location.origin;

if (locationPath.includes('iframe-poc')) {
  app.setAttribute('src', 'http://localhost:3000/app');
} else {
  app.setAttribute('src', '/app');
}

const patientInfoWrap = id('patient-info-wrap');

id('floating-info-button').addEventListener('click', (event) => {
  event.stopPropagation();

  patientInfoWrap.style.visibility = 'visible';

  const close = () => {
    patientInfoWrap.style.visibility = 'hidden';
  };

  document.addEventListener('click', (event) => {
    const patientInfoCard = id('patient-info');
    const withinBoundaries = event.composedPath().includes(patientInfoCard);

    if (!withinBoundaries) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
});
