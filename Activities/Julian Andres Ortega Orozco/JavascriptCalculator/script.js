  function suma(a, b) {
      return a + b;
  }

  function resta(a, b) {
      return a - b;
  }

   function multi(a, b) {
      return a * b;
  }

   function divi(a, b) {
      return a / b;
  }

  function ejecutar() {
      var a = parseFloat(document.getElementById('a').value);
      var b = parseFloat(document.getElementById('b').value);
      var s = suma(a, b);
      document.getElementById('resultado').innerText = 'El resultado de sumar es: ' + NaN2Zero(s);
  }

  function ejecutar1() {    
      var a = parseFloat(document.getElementById('a').value);
      var b = parseFloat(document.getElementById('b').value);
      var s = resta(a, b);
      document.getElementById('resultado').innerText = 'El resultado de restar es: ' + NaN2Zero(s);
  }

  function ejecutar2() {
      var a = parseFloat(document.getElementById('a').value);
      var b = parseFloat(document.getElementById('b').value);
      var s = multi(a, b);
      document.getElementById('resultado').innerText = 'El resultado de multiplicar es: ' + NaN2Zero(s);
  }

  function ejecutar3() {
      var a = parseFloat(document.getElementById('a').value);
      var b = parseFloat(document.getElementById('b').value);
      var s = divi(a, b);
      if (s === Number.POSITIVE_INFINITY) {
         s = returnFinite();
        }
      document.getElementById('resultado').innerText = 'El resultado dividir es: ' + NaN2Zero(s);
  }

 function NaN2Zero(n){
    return isNaN( n ) ? 0 : n; 
}