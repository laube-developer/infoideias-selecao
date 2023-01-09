//dev options
const devmode = false

if(devmode){
    const inputsList = document.getElementsByTagName("input")

    for(let index = 0; index < inputsList.length; index ++ ){
        inputsList[index].removeAttribute("required")
    }
}

// end dev options
const form = document.querySelector("form")
const selectBairro = document.querySelector("input[type=list]")
const datalist = document.querySelector("#bairro")

//lista de bairros
//pode ser buscada por uma api que retorna a
//lista atualizada dos bairros disponíveis
const bairros = [
    "Taguatinga",
    "Lago Sul",
    "Samambaia",
    "Guará",
    "Vicente Pires",
]

function mostrarBairros(){
    for(index in bairros){
        let element = document.createElement("option")
        element.setAttribute("value", bairros[index])
        
        datalist.append(element)
    }
}

form.onsubmit = (e)=>{
    e.preventDefault()

    if(!bairros.includes(selectBairro.value)){
        alert("Selecione um bairro dentre os listados!")
        return
    }

    form.submit()

}

mostrarBairros()