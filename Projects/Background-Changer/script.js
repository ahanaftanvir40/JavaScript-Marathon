const Allbuttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

Allbuttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.id === 'gray') {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id
        }
    })
})