//Codigo del cuadrado
console.group("Cuadrados");
function perimetroCuadrado (lado){
    return lado * 4;
};
function areaCuadrado(lado){
    return lado * lado;
};
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
function perimetroTriangulo(lado1,lado2,lado3){
    return lado1 + lado2 + lado3;
};
function areaTriangulo(base, altura){
    return (base * altura) / 2;
};
console.groupEnd();

//Codigo circulo
console.group("Circulos");
const pi = Math.PI;
function diametroCirculo(radio){
    return radio * 2;
};
function perimetroCirculo(){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
function areaCirculo(radio){
    return (radio * radio) * pi;
};
console.groupEnd();
