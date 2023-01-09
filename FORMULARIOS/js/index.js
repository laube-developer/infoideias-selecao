const form = document.querySelector("form")
const selectBairro = document.querySelector("input[type=list]")
const datalist = document.querySelector("#bairro")

//LISTA DE BAIRROS
//Ela pode ser buscada por uma api que retorna a
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

    //Verificar bairro
    if(!bairros.includes(selectBairro.value)){
        alert("Selecione um bairro dentre os listados!")
        return
    }

    form.submit()
}

mostrarBairros()