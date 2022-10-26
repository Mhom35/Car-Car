import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import App from './AppService';

const root = ReactDOM.createRoot(document.getElementById('root'));



// async function loadAutomobiles() {
//   const response1 = await fetch('http://localhost:8100/api/automobiles/');
//   let autoData = null;
//   if (response1.ok) {
//     autoData = await response1.json();
//   } else {
//     console.error(response1);
//   }


// }

// loadAutomobiles();

root.render(
  <>
    <App />
  </>
);
