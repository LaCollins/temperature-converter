const tempForm = document.getElementById('tempToConvert');
const button = document.getElementById('convert');
const fRadio = document.getElementById('fahrenheit');
const cRadio = document.getElementById('celsius');

const toCelsius =  () => {


}

const toFahrenheit =  () => {

}

const determineConverter = (e) => {
    if (fRadio.checked === true){
        console.log('F');
    } else if (cRadio.checked === true) {
        console.log('C');
    } else {
        console.log('please select');
    }

}


const buttonClick = () => {
    console.log(tempForm.value);
}


tempForm.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        button.click();

    }
});
button.addEventListener('click', determineConverter);

