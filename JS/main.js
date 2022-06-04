const texto= document.getElementById('texto');
const letras= texto.innerText.split("");

texto.innerText='';

letras.forEach((letra) =>{

    texto.innerHTML = innerHTML +
    <div>
        <span>${letra}</span>
        <span>${letra}</span>
    </div>
}


)