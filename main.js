const tempForm = document.getElementById('tempToConvert');
const button = document.getElementById('convert');
const fRadio = document.getElementById('fahrenheit');
const cRadio = document.getElementById('celsius');
const clear = document.getElementById('clear');

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const tempCard = (convertedTemp) => {
    let domString = `
    <div class="card col-9">
        <div class="row">
            <div class="card-body col-4 text-center">
            <i class="fas fa-thermometer-half"></i>
            </div>
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

const toCelsius =  (temp) => {
    let newTemp = Math.round((temp - 32) / 1.8);
    tempCard(newTemp);
}

const toFahrenheit =  (temp) => {
    let newTemp = Math.round((temp * 1.8) + 32);
    tempCard(newTemp);
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