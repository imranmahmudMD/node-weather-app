const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')// hashtag indicates targeting an id
const messageTwo = document.querySelector('#message-2')// hashtag indicates targeting an id


// note search.value takes the input value from search
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() // stops the browser from refreshing which is the default behaviour
    
    const location = search.value
    console.log(location)
    messageOne.textContent = 'Loading...hold tight!'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
        if(data.error) {
        messageOne.textContent = ''
        messageTwo.textContent = data.error
        } else {
            messageOne.textContent = ('The forecast for ' + data.location + ' is ' + data.forecast)
            messageTwo.textContent = ''
            }
        })
    })
})

// console.log(data.location)
//             console.log(data.forecast)