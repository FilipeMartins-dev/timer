const hour = document.querySelector('#card-hour')
const minutes = document.querySelector('#card-minutes')
const seconds = document.querySelector('#card-seconds')

function init(){
    const date = new Date()
    const h = date.getHours()
    const min = date.getMinutes()
    const s = date.getSeconds()
    
    if(h < 10){
        hour.innerHTML = `<div class="number">0${h}</div> <div class="label">horas</div>`
    } else{
        hour.innerHTML = `<div class="number">${h}</div> <div class="label">horas</div>`
    }

    if(min < 10){
        minutes.innerHTML = `<div class="number">0${min}</div> <div class="label">minutos</div>`
    } else {
        minutes.innerHTML = `<div class="number">${min}</div> <div class="label">minutos</div>`
    }

    if(s < 10) {
        seconds.innerHTML = `<div class="number">0${s}</div> <div class="label">segundos</div>`
    } else {
        seconds.innerHTML = `<div class="number">${s}</div> <div class="label">segundos</div>`
    }
}

setInterval(init, 500)
const card1 = document.querySelector('#card-hour')
const card2 = document.querySelector('#card-minutes')
const card3 = document.querySelector('#card-seconds')

card1.addEventListener('click', select)
card2.addEventListener('click', select)
card3.addEventListener('click', select)

function select(event){
    const target = event.target
    const parent = target.parentElement
    // console.log(target)
    // console.log(target.parentElement)
    
    if(target.classList.contains('number')){
        parent.classList.toggle('selected')
        return
    } 
    if(target.classList.contains('label')){
        parent.classList.toggle('selected')
    }
    else{
        target.classList.toggle('selected')
    }
}
