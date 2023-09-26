alert("Bienvenido/a al cuestionario sobre las Olimpíadas")
var nom=prompt("¿Cual es tu nombre?");
var pregunta1=prompt("1. ¿Cuándo se realizará la inauguración de las Olimpiadas?\nA. Lunes 02 de octubre\nB. Viernes 29 de setiembre\nC. Jueves 28 de setiembre");
if (pregunta1=="B"){
    pregunta1=1
}
else {
    pregunta1=0
}
var pregunta2=prompt("2-¿De qué color es la prompoción de 2do de secundaria?\nA. Celeste o Turquesa\nB. Rojo\nC. Morado");
if (pregunta2=="A"){
    pregunta2=1
}
else {
    pregunta2=0
}
var pregunta3=prompt("3. Nuevo deporte incluido este año\nA. Futsal femenino\nB. Balonmano\nC. Marcha atlética");
if (pregunta3=="C"){
    pregunta3=1
}
else {
    pregunta3=0
}
