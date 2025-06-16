//1° seleciona os elementos
const formDiv = document.querySelector("#top-form");
const numberFrom = document.querySelector("#number-from");
const numberTo = document.querySelector("#number-to");
const tabuadaOperations = document.querySelector("#tabuada-operations-container");
const tabuadaTitle = document.querySelector("#tabuada-title span");

// 3° Cria a tabuada
const createTable = (numberFromValue, numberToValue) => {
    tabuadaOperations.innerHTML = "";

    // Qnts nvezes teremos de imprimir essa tabuada?
    // Imprimiremos ela até "numberToValue"
    for (let i = 0; i <= numberToValue; i++) {
        const result = numberFromValue * i;
        
        const template = `
        <div class="row">
            <div class="operation">${numberFromValue} x ${i} = </div>
            <div class="result">${result}</div>
        </div>
        `;

        const parser = new DOMParser(); // Responsável por parsear uma string para HTML
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");
        tabuadaOperations.appendChild(row);
    }

    tabuadaTitle.innerHTML = numberFromValue;    
};

// 2° Eventos
formDiv.addEventListener("submit", (e) => {
    e.preventDefault();

    const numberFromValue = +numberFrom.value; // O + na frente do "elemento.value" serve pra transformá-lo em decimal
    const numberToValue = +numberTo.value;

    if (!numberFromValue || !numberToValue) 
        return;

    console.log(numberFromValue, numberToValue);
    createTable(numberFromValue, numberToValue);
});