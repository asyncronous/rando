let button = document.querySelector("button")

button.addEventListener("click", event => {
    event.preventDefault()
    $.getJSON("https://randomuser.me/api/", result => {
        let res = result.results[0]
        let div = document.querySelector("div")

        let name = `Name: ${res.name.first} ${res.name.last}`
        let country = `Country: ${res.location.country}`
        let dob = new Date(res.dob.date)

        div.innerHTML = `<p>${name}</p> <p>${country}</p> <p>DOB: ${dob.toLocaleString().split(",")[0]}</p>`
    })  
})