const piedra = document.querySelector(".piedra").addEventListener("click", jugar)
const papel = document.querySelector(".papel").addEventListener("click", jugar)
const tijera = document.querySelector(".tijera").addEventListener("click", jugar)
const elegido = document.querySelector(".elegido")
const contrario = document.querySelector(".contrario")
const mensaje = document.querySelector(".mensaje")
let contrincantes = ["✊", "🤚", "✌"]

function jugar(e){
    aclararHTML()

    const divElegido = document.createElement("div")
    
    contrario.classList.add("contrario")
    contrario.textContent = "calculando..."

    setTimeout( ()=>{
        divElegido.classList.add("divElegido")
        divElegido.innerHTML = e.target.textContent
        elegido.append(divElegido)

        contrario.innerHTML = ""
        contrario.classList.remove("contrario")
        randomizer()
        mostrarMensaje()
    }, 1000);

}

function aclararHTML(){
    if(elegido.firstChild){
        elegido.removeChild(elegido.firstChild)
       
    }
}

function randomizer(){
    const divContrario = document.createElement("div")
    divContrario.classList.add("divElegido")
    divContrario.innerHTML = contrincantes[Math.floor( Math.random() * contrincantes.length )]  
    contrario.append(divContrario)
}

function  mostrarMensaje(){
    if(mensaje.firstChild){
        mensaje.removeChild(mensaje.firstChild)
        mensaje.classList.remove("garron")
        mensaje.classList.remove("empate")
        mensaje.classList.remove("felicitaciones")
    }

    if( elegido.textContent == "✊" && contrario.textContent == "✌"){
    mensaje.innerHTML = "ganaste!!"
    mensajeClass()}
    else if(elegido.textContent == "✊" && contrario.textContent == "🤚"){
        mensaje.innerHTML = "perdiste"
        mensajeClass()
    } else if(elegido.textContent == "✊" && contrario.textContent == "✊"){
        mensaje.innerHTML = "has empatado"
        mensajeClass()
    }

    if( elegido.textContent == "✌" && contrario.textContent == "🤚"){
    mensaje.innerHTML = "ganaste!!"
    mensajeClass()}
    else if(elegido.textContent == "✌" && contrario.textContent == "✊"){
        mensaje.innerHTML = "perdiste"
        mensajeClass()
    } else if(elegido.textContent == "✌" && contrario.textContent == "✌"){
        mensaje.innerHTML = "has empatado"
        mensajeClass()
    }

    if( elegido.textContent == "🤚" && contrario.textContent == "✊"){
     mensaje.innerHTML = "ganaste!!"
     mensajeClass()
    }
    else if(elegido.textContent == "🤚" && contrario.textContent == "✌"){
        mensaje.innerHTML = "perdiste"
        mensajeClass()
    } else if(elegido.textContent == "🤚" && contrario.textContent == "🤚"){
        mensaje.innerHTML = "has empatado"
        mensajeClass()
    }
}

function mensajeClass(){
    if(mensaje.innerHTML == "has empatado"){
    mensaje.classList.add("empate")}
    else if(mensaje.innerHTML == "perdiste"){
        mensaje.classList.add("garron")}
    else if(mensaje.innerHTML == "ganaste!!"){
        mensaje.classList.add("felicitaciones")}
}
