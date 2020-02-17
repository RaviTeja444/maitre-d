document.addEventListener('click', event => {
    if (event.target && event.target.id === "btn") { functioncalc() }
})

function functioncalc() {
    const total = document.getElementById('total').value;
    const rate = document.getElementById('rate').value;
    const tip = rate * total / 100;
    const tax = (55 * total / 1000).toFixed(4);
    const grandtotal = Number(total) + tip + tax;
    document.getElementById('tip').value = '$'+tip;
    document.getElementById('tax').value = '$'+tax;
    document.getElementById('grandtotal').value = '$'+grandtotal;
}