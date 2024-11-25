function exibir () {
    const gal = document.querySelector("#gal")
    //gal.innerHTML = '<h1>Olá, mundo!</h1>'
    //gal.innerHTML = '<img src="../img/1.jpg">'
    //const numero = Math.floor(Math.random() * 25) + 1 
    //gal.innerHTML = numero
    //gal.innerHTML = '<img src="../img/'+ numero +'.jpg">'

    let listaimagem = ""
    let numeros = new Set() 
    while (numeros.size < 20) {
        numero = Math.floor(Math.random() * 25) + 1
        numeros.add(numero)
    } 
    let listaNumeros = Array.from(numeros)
    listaNumeros.forEach (numero => {
        listaimagem = listaimagem + '<img src="../img/'+ numero +'.jpg">'
    })

    gal.innerHTML = listaimagem

}
window.onload = exibir
