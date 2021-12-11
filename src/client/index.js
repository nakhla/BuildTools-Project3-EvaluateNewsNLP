import {handleSubmit} from './js/formHandler'

// console.log('hello magdi', {handleSubmit})

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

function main() {
    const NLPformElement = document.getElementById('NLPform')
    NLPformElement.addEventListener('submit', handleSubmit)

    if (process.env.NODE_ENV === 'production'){
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
              }, function(err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
              });
            });
          }
    }
}

main()