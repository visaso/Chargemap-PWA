window.onload = () => {
    'use strict';
    console.log('Window load')
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }