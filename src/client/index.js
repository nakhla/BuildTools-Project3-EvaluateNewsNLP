import {handleSubmit} from './js/formHandler'

console.log('hello magdi', {handleSubmit})

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

function main() {
    const NLPformElement = document.getElementById('NLPform')
    NLPformElement.addEventListener('submit', handleSubmit)
}

main()