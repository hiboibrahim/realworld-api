const API_KEY = "VZn-Fx2ohpPGHAs_RhP_m6IgxYA";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function getStatus(e){
    const queryString = `${API_KEY}?api_key=${API_KEY}`;
    const reponse = await (queryString);
    const data = await Response.json();

    if(Response.ok){
        displayStatus(data.expiry);
    } else {
        throw new Error(Data.error);
    }
}

function displayStatus(data) = {
    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results
    resultsModal.show()
} 

