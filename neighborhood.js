

let randomUrl = document.querySelector('#ranUrl')

let arr = ['Sandwhich Queen', 'Chubys', 'Fat Jacks', 'The Polar Queen', 'Daley Freeze' ]

let randomRes= () =>{
    let random = Math.floor(Math.random()*arr.length)
    alert(`We recomend ${arr[random]}!`)
}

ranUrl.addEventListener('click', randomRes)