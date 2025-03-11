function functionGenerarCupon() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const length = 10;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    cuponGenerado.innerText = result;

    let cupones = JSON.parse(sessionStorage.getItem('cupones')) || [];
    cupones.push(result);
    sessionStorage.setItem('cupones', JSON.stringify(cupones));
    console.log(JSON.stringify(cupones));
}

function validarCupon() {
    const cuponInput = document.getElementById('cuponInput').value;
    let cupones = JSON.parse(sessionStorage.getItem('cupones')) || [];
    const index = cupones.indexOf(cuponInput);
    if (index !== -1) {
        mostrarValides.style.color = 'green';
        mostrarValides.innerText = 'Cupon valido';
        cupones.splice(index, 1); // Remove the coupon from the array
        console.log(JSON.stringify(cupones));
        sessionStorage.setItem('cupones', JSON.stringify(cupones)); // Update sessionStorage
    } else {
        mostrarValides.style.color = 'red';
        mostrarValides.innerText = 'Cupon no exite o ya fue redimido ❌';
        console.log(JSON.stringify(cupones));
    }
}
