const req = new XMLHttpRequest();
const btnSave = document.getElementById("save");
const btnAdd = document.getElementById("add-ingredient"); 
const ingredientsArea = document.getElementById("ingredients-area");
const printable = document.getElementById("demo");
const firstInput = document.getElementById('inputs-parent');


// Agregar nueva linea de input
btnAdd.addEventListener("click", function(){
    let div = document.createElement("div")
    let input = document.createElement("input")



    input.setAttribute("type","text" )
    input.setAttribute("name","ingredients" )
    input.setAttribute("placeholder","ingredients" )
    input.setAttribute("class","form-control col-md-9 mb-1 mt-1" )
    // input.setAttribute("className","col-md-9" )

    // div.appendChild(input)
    console.log('click')
    firstInput.appendChild(input)
    console.log(firstInput)
  
})
