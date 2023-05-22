const button = document.querySelector(".exercise-button");

button.addEventListener("click", () => {
    fetch("/api/exercises/",{
        method: "GET"
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let exercises = data;
            console.log(exercises);
    });
})
