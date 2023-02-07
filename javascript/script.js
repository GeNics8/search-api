/* Search bar for API-Ninjas-Calories-Burned */

const searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click",searchCalories)

function searchCalories (event) {
    const queryString = "https://api.api-ninjas.com/v1/caloriesburned?activity=" + document.getElementById("search-bar").value
    event.preventDefault();
    console.log(queryString)
    fetch(queryString,{method:"GET",headers:{
    'X-Api-Key':"FUTTDF8tfgQ2Kp0ARtHAmw==L68CvqvDQpMYdgnE"
}}).then(function(response){
    return response.json();
}).then(function(data){
    console.log(data)
})
}


/* Search bar for API-Ninjas-Calories-Burned */

const searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click",searchCalories)

function searchCalories (event) {
    const queryString = "https://api.api-ninjas.com/v1/caloriesburned?activity=" + document.getElementById("search-bar").value
    event.preventDefault();
    console.log(queryString)
    fetch(queryString,{method:"GET",headers:{
    'X-Api-Key':"FUTTDF8tfgQ2Kp0ARtHAmw==L68CvqvDQpMYdgnE"
}}).then(function(response){
    return response.json();
}).then(function(data){
    console.log(data)
})
}