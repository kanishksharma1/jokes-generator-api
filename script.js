document.querySelector(".container #jokeBtn").addEventListener("click", function name(params) {
    fetch("https://api.chucknorris.io/jokes/random")
    .then( (response) => { return response.json() })
    .then((input) => {
         document.querySelector(".container #joke").innerText = input.value 
    })

    .catch();
    
})