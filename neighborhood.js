let restaurants = document.querySelector('#restaurants')
let icon = document.querySelector('#icon')
let random = document.querySelector('#random')
let arr = document.querySelector('#arr')

const randomRes = evt => {
    let randomElement = Math.floor(Math.random() * arr.length);
    let randomLink = arr[randomRes]
    alert(randomLink)
}

random.addEventListener('click', randomRes)