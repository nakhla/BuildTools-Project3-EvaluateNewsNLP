import {validURL} from './urlChecker'

let url = "/test";
if (process.env.NODE_ENV === "development") {
    url = "http://localhost:8085/test";
}

export function handleSubmit(event) {
    event.preventDefault()

    // check if text is valid url format
    let formText = document.getElementById('url').value
    if (validURL(formText)){


    console.log("::: Form Submitted :::")
    
    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ articleUrl: formText }) 
    })
    .then((raw) => raw.json())
    .then((response) => {
    document.getElementById('agreement').innerHTML = "Agreement: " + response.agreement;
    document.getElementById('confidence').innerHTML = "Confidence: " + response.confidence;
    document.getElementById('irony').innerHTML = "Irony: " + response.irony;
    document.getElementById('subjectivity').innerHTML = "subjectivity: " + response.subjectivity;
    document.getElementById('score_tag').innerHTML = "Score Tag: " + response.score_tag;
});

}else
alert('Please Enter valid url')
}
