const tempForm = document.getElementById('tempToConvert');
const button = document.getElementById('convert');
const fRadio = document.getElementById('fahrenheit');
const cRadio = document.getElementById('celsius');
const clear = document.getElementById('clear');
let icon = '';

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const tempCard = (convertedTemp, icon) => {
    let domString = `
    <div class="card col-9">
        <div class="row">
            <div class="card-body col-4 text-center">
            <i class="fas fa-thermometer-half"></i>
            </div>
            ${icon}
        <div class="col-6">
            <div class="card-body text-center">
                   <p id="tempOutput">${convertedTemp}°</p>
            </div>
        </div>
        </div>
    </div>
    `;
    printToDom(domString, 'tempZone');
}

const changeColor = (actualTemp, lowTemp, highTemp) => {
    const divToColor = document.getElementById('tempZone');
    if (actualTemp < lowTemp) {
        divToColor.style.color = "blue";
        icon = '<i class="far fa-snowflake"></i>';
    } else if (actualTemp > highTemp) {
        divToColor.style.color = "red";
        icon = '<i class="fas fa-sun"></i>';
    } else {
        divToColor.style.color = "green";
        icon = '<i class="far fa-laugh-beam"></i>';
    }
}

const toCelsius =  (temp) => {
    const high = 32;
    const low = 0;
    let newTemp = Math.round((temp - 32) / 1.8);;
    changeColor(newTemp, low, high);
    tempCard(newTemp, icon);
}

const toFahrenheit =  (temp) => {
    const high = 90;
    const low = 32;
    let newTemp = Math.round((temp * 1.8) + 32);
    changeColor(newTemp, low, high);
    tempCard(newTemp, icon);
}

const determineConverter = (e) => {
    if (fRadio.checked === true){
        toFahrenheit(tempForm.value);
    } else if (cRadio.checked === true) {
        toCelsius(tempForm.value);
    } else {
        alert('Please select a conversion!');
    }

}


const buttonClear = () => {
    tempForm.value = '';
    printToDom('', 'tempZone');
}


tempForm.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        button.click();

    }
});

button.addEventListener('click', determineConverter);
clear.addEventListener('click', buttonClear);