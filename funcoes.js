function teclar(caracter) {
  //Variaveis Locais
  let ecra = document.querySelector("#ecra");

  //Executar
  if (parseFloat(ecra.innerHTML) === 0) {
    ecra.innerHTML = caracter;
  } else {
    ecra.innerHTML += caracter;
  }

  //   calcular();
}

function limpar() {
  //Variaveis Locais
  let ecra = document.querySelector("#ecra");

  //Executar

  ecra.innerHTML = "0";
  saida.innerHTML = "";
}

function calcular() {
  //Variaveis Locais
  let ecra = document.querySelector("#ecra");
  let saida = document.querySelector("#saida");

  //Executar
  let celcius = parseFloat(ecra.innerHTML).toFixed(2);
  let far = (parseFloat(ecra.innerHTML) * 1.8 + 32).toFixed(2);
  let kel = (parseFloat(ecra.innerHTML) + 273.15).toFixed(2);

  saida.innerHTML = `${celcius} C = ${far} F`;
  saida.innerHTML += "<br>";
  saida.innerHTML += `${celcius} C = ${kel} K`;
}
