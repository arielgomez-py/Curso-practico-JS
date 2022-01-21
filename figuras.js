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
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); // se obtiene, a traves del ID, el valor del lado del cuadrado
                                                           // introducido por el usuario en el HTML 
    const value = input.value;
    const perimetro = perimetroCuadrado(value); // se llama a la funcion que calcula el perimetro del cuadrado
    alert(perimetro);
};
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
};
////Triangulo

//Area
function calcularAreaTriangulo(){
    const input_lado1 = document.getElementById("InputLado1");
    const value_input1 = input_lado1.value;

    const input_lado2 = document.getElementById("InputLado2");
    const value_input2 = input_lado2.value;

    const input_base = document.getElementById("Base");
    const value_base = input_base.value;

    const input_altura = document.getElementById("Altura");
    const value_altura = input_altura.value;
    
    const area = areaTriangulo(value_input1, value_input2, value_base, value_altura);
    alert(area);
};
    //Perimetro
    function calcularPerimetroTriangulo(){
        const input_lado1 = document.getElementById("InputLado1");
        const value_input1 = Number(input_lado1.value) ;
    
        const input_lado2 = document.getElementById("InputLado2");
        const value_input2 = Number(input_lado2.value);
    
        const input_base = document.getElementById("Base");
        const value_base = Number(input_base.value);
    
        const input_altura = document.getElementById("Altura");
        const value_altura = Number(input_altura.value);

        const perimetro = perimetroTriangulo(value_input1, value_input2, value_base, value_altura);
        alert(perimetro);
};
//Circulo
function calcularLongitudCircunferencia(){
    const input_radio = document.getElementById("Radio");
    const value_radio = Number(input_radio.value);
   
    const longitud = perimetroCirculo(value_radio);
    alert(longitud);
};




