$(document).ready(function() {
    $('#addressForm').submit(function(event) {
        event.preventDefault();
        
        var origin = $('#origin').val();
        var destination = $('#destination').val();
        
       
        var distance = calcularDistancia(origin, destination);
        
     
        var monto = calcularMonto(distance);
        
       
        $('#result').html('La distancia entre ' + origin + ' y ' + destination + ' es de ' + distance + ' km.<br>El monto a pagar por el envío es de $' + monto.toFixed(2) + '.');
    });
});

function calcularDistancia(origin, destination) {
    
    return Math.random() * 100; 
}

function calcularMonto(distancia) {
    
    var tarifaBase = 10; 
    var tarifaPorKilometro = 0.5; 
    return tarifaBase + (tarifaPorKilometro * distancia);
}