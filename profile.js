let btn = document.querySelector('#btn')

let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')





const favColBtn = evt =>{    
    alert('My favorite color is Green!')
}
const favPlcBtn = evt =>{    
    alert('Home is my favorit place!')
}
const ritualBtn = evt =>{    
    alert('My ritual is working out after class!')
}

color.addEventListener('click', favColBtn)
place.addEventListener('click', favPlcBtn)
ritual.addEventListener('click', ritualBtn)