var appForm = document.querySelector("#app form");

appForm.onsubmit = dollar2cent;

function dollar2cent(e){
	e.preventDefault();

	var input_dollar = document.getElementById("input_dollar").value;
	var result = document.getElementById("result");
	result.innerHTML = "";

	var result_moedas = document.getElementById("result-moedas");
	result_moedas.innerHTML = "";

	var valor_cents = parseFloat(input_dollar)*100;

	result.innerHTML = valor_cents;

	var moedas = separarMoedas(valor_cents);

	result_moedas.innerHTML = "Quarters: " + moedas[0]
	+ " Dimes: " + moedas[1] + " Nickels: " + moedas[2]
	+ " Pennies: " + moedas[3];
}

function separarMoedas(valor){
	var total = valor;
	
	var quarters = 0;
	if(total >= 25){
		quarters = parseInt(total/25);
		total -= 25*quarters;
	}
	console.log(total);

	var dimes = 0;
	if(total >= 10){
		dimes = parseInt(total/10);
		total -= 10*dimes;
	}

	var nickels = 0;
	if(total >= 5){
		nickels = parseInt(total/5);
		total -= 5*nickels;
	}

	var pennies = total;

	return [quarters, dimes, nickels, pennies];
}