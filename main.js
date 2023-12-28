const h1 =  document.querySelector('h1');
const formulario =  document.querySelector('#formulario');
const input1 =  document.querySelector('#calculo1');
const input2 =  document.querySelector('#calculo2');
const btn =  document.querySelector('#btnCalcular');
const pResultado =  document.querySelector('#resultado');

form.addEventListener('submit', sumarInputsValues); //este metodo requiere dos parametros el primero el evento y segundo la funcion que queremos ejecutar

function sumarInputsValues(event){
    event.preventDefault();//esto hace que no se ejeculte lo que hace un formulario por defecto que es tratar de enviar un formulario cuando es de tipo submit
    const sumaInputs = Number(input1.value) + input2.value;
    pResultado.innerText = "Resultado: " + sumaInputs;

}

/* h1.innerHTML = 'patito <br> feo'; */ //permite modificar el elemento de la etiqueta seleccionada
/* h1.innerText = 'patito <br> feo'; */ //permite modificar el elemento de la etiqueta seleccionada
/* console.log(h1.getAttribute('class')); */ //llamo la clase de esa etiqueta
/* h1.setAttribute('class', 'rojo') */ //cambio el nombre de la clase a "rojo"


/* h1.classList.add('azul'); */ //agregar clase "azul" a la etiqueta h1 en este caso
/* h1.classList.remove('rojo'); */ //eliminar la clase "rojo" de la etiqueta h1

/* h1.classList.toggle

input.value = "123"; */ //dejar el valor del input como predeterminado

/* const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/originals/d0/cb/cf/d0cbcf66fce4df3e62c320a1a4be5e3d.jpg');
console.log(img); */

/* par.innerHTML = ''; */ //dejar la etiqueta p como un string vacio
/* par.append(img); */ //agrega la imagen con el id "par" a la etiqueta p despues del contemido que ta tenga la etiqueta



