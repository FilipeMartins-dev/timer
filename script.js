const hour = document.querySelector('#card-hour')
const minutes = document.querySelector('#card-minutes')
const seconds = document.querySelector('#card-seconds')

function init(){
    const date = new Date()
    const h = date.getHours()
    const min = date.getMinutes()
    const s = date.getSeconds()
    
    if(h < 10){
        hour.innerHTML = `<div>0${h}</div> <div class="label">horas</div>`
    } else{
        hour.innerHTML = `<div>${h}</div> <div class="label">horas</div>`
    }

    if(min < 10){
        minutes.innerHTML = `<div>0${min}</div> <div class="label">minutos</div>`
    } else {
        minutes.innerHTML = `<div>${min}</div> <div class="label">minutos</div>`
    }

    if(s < 10) {
        seconds.innerHTML = `<div>0${s}</div> <div class="label">segundos</div>`
    } else {
        seconds.innerHTML = `<div>${s}</div> <div class="label">segundos</div>`
    }
    // console.clear()
    // console.log(`${h}:${min}:${s}`)
}

setInterval(init, 500)