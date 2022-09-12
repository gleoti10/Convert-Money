

//Primeiro peguei o clique do botão pelo id

const button = document.getElementById ("convert-button")
const select = document.getElementById ("currency-select")

const dolar = 5.15
const euro = 5.23
const bitcoin = 0.0000090


// o codigo onde tem new eu copiei do site How to Format Currency in ES6 para chamar o formato
// simbolo em reias e em euro 
// avisando quem será acionado  no caso o botão, valores em reais e converter
// bitcoin eu uso a subtração para ver se deu certo pesquisar no google euro real, dolar real e bitcoin real
// testar colocando no campo real brasileiro um real e vai aparecer o valor pra saber se deu certo
// ou dividir exemplo do dolar 200,00 / 5,15 

const convertValues = () => { 
    const inputReais = document.getElementById("input-real").value
    const realValueText = document.getElementById ("real-value-text")
    const currencyValueText = document.getElementById ("currency-value-text")
    

    //realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
  }).format(inputReais);


  if (select.value === "Bitcoin") {
    currencyValueText.innerHTML = (inputReais * bitcoin )
}

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
  ).format(inputReais / dolar)}

  if (select.value === "€ Euro") {
      currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: "EUR",
      }).format(inputReais / euro)
  }
}
   
 
// formatando a imagem e trocando os valores de euro para dolar
// peguei a sessão select chamei ela 
// pelo getElementByid para trabalhar nas mudanças da imagem e simbolos em reais e euro


changeCurrency = () => {
const currencyName = document.getElementById ('currency-name')
const currencyImg = document.getElementById ('currency-img')

if(select.value === "Bitcoin"){
  currencyName.innerHTML = "Bitcoin"
  currencyImg.src = "./assets/bitcoin.png"
}

  if(select.value === "€ Euro"){
  currencyName.innerHTML = "Euro"
  currencyImg.src = "./assets/euro.png"
}

if(select.value === "US$ Dólar americano"){
  currencyName.innerHTML = "Dólar americano"
  currencyImg.src = "./assets/eua.png"
}

convertValues ()

}

button.addEventListener("click", convertValues)
select.addEventListener ("change", changeCurrency) 



