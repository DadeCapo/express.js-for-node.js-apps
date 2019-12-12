console.log('Client side js file')

fetch('http://localhost:3000/weather?address=miami').then((response) => {
    response.json().then((data) => {
        console.log(data)
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})