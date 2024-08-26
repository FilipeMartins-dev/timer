import { seconds, minutes, hour } from "./components.mjs"

export function warningS(){
    console.log("OK")
    seconds.classList.add("selected")
    minutes.classList.add("selected")
    setTimeout(()=>{
        seconds.classList.remove("selected")
        minutes.classList.remove("selected")
    }, 1000)
}
export function warningH(){
    console.log("OK")
    hour.classList.add("selected")
    setTimeout(()=>{
        hour.classList.remove("selected")
    }, 1000)
}
