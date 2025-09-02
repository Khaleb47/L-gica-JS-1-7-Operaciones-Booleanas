let numeroUn = 1

let stringUn = '1'

let numeroTreinta = 30

let stringTreinta = '30'

let numeroDiez = 10

let stringDiez = '10'


document.getElementById('boton1').addEventListener('click', function() {
    let mensaje;
    if (numeroUn == stringUn) {
        mensaje = 'Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes';
    } else {
        mensaje = 'Las variables numeroUn y stringUn no tienen el mismo valor';
    }
    document.getElementById('Resultado1').textContent = mensaje;
});

document.getElementById('boton2').addEventListener('click', function() {
    let mensaje;
    if (numeroUn === stringUn) {
        mensaje = 'Las variables numeroUn y stringUn tienen el mismo valor y el mismo tipo';
    } else {
        mensaje = 'Las variables numeroUn y stringUn no tienen el mismo valor o no tienen el mismo tipo';
    }
    document.getElementById('Resultado2').textContent = mensaje;
});

document.getElementById('boton3').addEventListener('click', function() {
    let mensaje;
    if (numeroTreinta == stringTreinta) {
      mensaje = 'Las variables numeroTreinta y stringTreinta tienen el mismo valor, pero tipos diferentes';
    } else {
      mensaje = 'Las variables numeroTreinta y stringTreinta no tienen el mismo valor';
    }
    document.getElementById('Resultado3').textContent = mensaje;
});

document.getElementById('boton4').addEventListener('click', function() {
    let mensaje;
    if (numeroTreinta === stringTreinta) {
      mensaje = 'Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo';
    } else {
      mensaje = 'Las variables numeroTreinta y stringTreinta no tienen el mismo valor o no tienen el mismo tipo';
    }
    document.getElementById('Resultado4').textContent = mensaje;
});

document.getElementById('boton5').addEventListener('click', function() {
    let mensaje;
    if (numeroDiez == stringDiez) {
      mensaje = 'Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes';
    } else {
      mensaje = 'Las variables numeroDiez y stringDiez no tienen el mismo valor';
    }
    document.getElementById('Resultado5').textContent = mensaje;
});

document.getElementById('boton6').addEventListener('click', function() {
    let mensaje;
    if (numeroDiez === stringDiez) {
      mensaje = 'Las variables numeroDiez y stringDiez tienen el mismo valor y el mismo tipo';
    } else {
      mensaje = 'Las variables numeroDiez y stringDiez no tienen el mismo valor o no tienen el mismo tipo';
    }
    document.getElementById('Resultado6').textContent = mensaje;
});
