//Codigo del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
};
function areaCuadrado(lado){
    return lado * lado;
};

//Codigo del triangulo
function perimetroTriangulo(lado1,lado2,lado3){
    return lado1 + lado2 + lado3;
};
function areaTriangulo(base, altura){
    return (base * altura) / 2;
};

//Codigo circulo
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

//Interactuando con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
};
