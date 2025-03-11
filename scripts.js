function functionGenerarCupon() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*?¡¿';
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
    console.log("Se registro el nuevo cupon: " + cuponGenerado);
    console.log(JSON.stringify(cupones));
}

function validarCupon() {
    const cuponInput = document.getElementById('cuponInput').value;
    let cupones = JSON.parse(sessionStorage.getItem('cupones')) || [];
    const index = cupones.indexOf(cuponInput);
    if (index !== -1) {
        mostrarValides.style.color = 'green';
        mostrarValides.innerText = 'Cupon valido';
        console.log("Se valido el cupon: " + cuponInput);
        cupones.splice(index, 1);
        console.log(JSON.stringify(cupones));
        sessionStorage.setItem('cupones', JSON.stringify(cupones));
    } else {
        mostrarValides.style.color = 'red';
        mostrarValides.innerText = 'Cupon no exite o ya fue redimido ❌';
        console.log("Se intento validar el cupon: " + cuponInput);
        console.log(JSON.stringify(cupones));
    }
}
