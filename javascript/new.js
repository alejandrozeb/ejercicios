/* -------ejercicio aquí---------
https://www.codechef.com/problems/REDONE
*/
var aux;
const array4 =[3,1,2,4];

array4.sort(function(x,y){
    return x-y;
});

console.log(array4);

while (array4.length!=1) {

    aux=total(array4.shift(),array4.pop());
    array4.push(aux);
  }

function total(numero1,numero2){
    var a,b;
    a=numero1+numero2;
    b=numero1*numero2;
    return a + b;
}

console.log(array4); 