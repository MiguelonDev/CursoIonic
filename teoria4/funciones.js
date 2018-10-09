var litros = 350;
var centilitros = calculaCentilitros(litros) + " centilitros";

function calculaCentilitros(litros){
	return litros * 100;
}

var kilometros = 5.3;
var metros = calculaMetros(kilometros) + " metros";

function calculaMetros(kilometros){
	return kilometros * 1000;
}

var horas = 3;
var minutos = calculaMinutos(horas) + " minutos";

function calculaMinutos(horas){
	return horas * 60;
}

var megabytes = 4096;
var gigabytes = calculaGigabytes(megabytes) + " gigabytes";

function calculaGigabytes(megabytes){
	return megabytes / 1024;
}

var pulgadas = 55;
var centimetros = calculaCentimetros(pulgadas) + " centimetros";

function calculaCentimetros(pulgadas){
	return pulgadas * 2.54;
}

var dias = 1;
var horas2 = calculaHoras(dias);
var minutos2 = calculaHoras(dias) * parseFloat(calculaMinutos(1));
var segundos = calculaSegundos(calculaHoras(dias) * parseFloat(calculaMinutos(1)));

function calculaHoras(dias){
	return dias * 24;
}

function calculaSegundos(minutos){
	return minutos * 60;
}

var precio = 50;
var descuento = 20;
var iva = 21;
var total = calculaIva(calculaDescuento(precio,descuento),iva) + "€";

function calculaDescuento(precio,descuento){
	return precio - (precio * (descuento / 100));
}

function calculaIva(precio, iva){
	return precio * ((100+iva)/100);
}

var anyoAct = 2018;
var anyoSig = incremento(anyoAct);
var anyoAnt = decremento(anyoAct);

function decremento(anyoAct){
	return --anyoAct;
}
function incremento(anyoAct){
	return ++anyoAct;
}

var anyo = 1;
var diasPorAnyo = calculaDias(anyo);
var semanas = calculaSemanas(calculaDias(anyo));
var trimestres = calculaTrimestres(anyo);

function calculaDias(anyo){
	return anyo * 365;
}

function calculaSemanas(dias){
	return parseInt(dias / 7);
}

function calculaTrimestres(anyo){
	
	return parseInt((calculaDias(anyo) / 30) / 3);
}

var velocidad = 120;
var distancia = 375;
var tiempo = calculaTiempos(velocidad,distancia);
var tiempoEnHoras = calculaMinutosEnHoras(calculaTiempos(velocidad,distancia));

function calculaTiempos(velocidad,distancia){

	return (distancia/velocidad)*60;
}

function calculaMinutosEnHoras(minutos){
	return minutos/60;
}

