// prevent letters in user input
var RegExp = new RegExp(/^\d*\.?\d*$/);
var val = document.getElementById("number").value;

function valid(elem) {
    if (RegExp.test(elem.value)) {
        val = elem.value;
        let lengthEval = length(val);
        let volEval = volume(val);
        let massEval = mass(val);
        document.getElementById('di-conv-res-st-top').textContent = `${lengthEval}`;
        document.getElementById('di-conv-res-st-mid').textContent = `${volEval}`;
        document.getElementById('di-conv-res-st-btm').textContent = `${massEval}`;
        document.getElementById('error').textContent = ``;
        
    } else {
        elem.value = val;
        document.getElementById('error').textContent = `Please enter a number`;
    }

    function length(num) {
        let res1 = num * 3.28084;
        let res2 = num * 0.3048;
        return `${val} Meters = ${res1.toFixed(3)} feet | ${val} feet = ${res2.toFixed(3)} meters`
    }

    function volume(num) {
        let res1 = num * 0.264;
        let res2 = num * 3.785411784;
        return `${val} Liters = ${res1.toFixed(3)} gallons | ${val} gallons = ${res2.toFixed(3)} liters`
    }

    function mass(num) {
        let res1 = num * 2.20462262185;
        let res2 = num * 0.45359237;
        return `${val} Kilos = ${res1.toFixed(3)} pounds | ${val} pounds = ${res2.toFixed(3)} kilos`
    }
}
// clear input
function clear() {
    document.getElementById('number').value = "";
    document.getElementById('di-conv-res-st-top').textContent = '0 Meters = 0.000 feet | 0 feet = 0.000 meters';
    document.getElementById('di-conv-res-st-mid').textContent = '0 Liters = 0.000 gallons | 0 gallons = 0.000 liters';
    document.getElementById('di-conv-res-st-btm').textContent = '0 Kilos = 0.000 pounds | 0 pounds = 0.000 kilos';
}

document.getElementById('number').onclick = clear;