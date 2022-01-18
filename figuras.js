//Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


const perimetroCuadrado = 4 * ladoCuadrado;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

console.group("Triangulos");
//Codigo del triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden: " 
 + ladoTriangulo1 + "cm, " 
 + ladoTriangulo2 + "cm, " 
 + baseTriangulo  + "cm "
);

console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Codigo circulo
console.group("Circulos");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;

console.groupEnd();
