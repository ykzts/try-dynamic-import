import React from 'react';
import ReactDOM from 'react-dom';

function render(element, container) {
  return new Promise((resolve, reject) => {
    try {
      ReactDOM.render(element, container, resolve);
    } catch (error) {
      reject(error);
    }
  });
}

async function main() {
  const App = await import('./components/App');
  const container = document.getElementById('root');
  try {
    await render(<App />, container);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error.message);
  }
}

main();
