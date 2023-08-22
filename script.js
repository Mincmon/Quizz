let vida=2;
let pts=0;

const QTS=["Q1","Q2","Q3","Q4","Q5"];
let q=0;

const IMGS=["QI1","QI2","QI3","QI4","QI5"];
let img=document.getElementById('imgs');
let i=0;

let qst=document.getElementById('qst');

let a1=document.getElementById('b1');
let a2=document.getElementById('b2');
let a3=document.getElementById('b3');
let a4=document.getElementById('b4');

let c=document.getElementById('c');
var e=document.getElementById('e1','e2','e3');

function QS2 () {
    let qst=document.getElementById('qst').innerHTML="Questão 2: Qual é a equação química básica da fotossíntese?";
    let a1=document.getElementById('b1').innerHTML="a) CO2 + H2O -> C6H12O6 + O2";
    let a2=document.getElementById('b2').innerHTML="b) C6H12O6 + O2 -> CO2 + H2O";
    let a3=document.getElementById('b3').innerHTML="c) H2O + O2 -> CO2 + C6H12O6";
    let a4=document.getElementById('b4').innerHTML="d) O2 + CO2 -> H2O + C6H12O6";
}

function QS3 () {
    let qst=document.getElementById('qst').innerHTML="Questão 3: Qual das seguintes revoluções é conhecida por promover o surgimento da indústria e o uso de máquinas?";
    let a1=document.getElementById('b1').innerHTML="a) Revolução Cultural";
    let a2=document.getElementById('b2').innerHTML="b) Revolução Francesa";
    let a3=document.getElementById('b3').innerHTML="c) Revolução Industrial";
    let a4=document.getElementById('b4').innerHTML="d) Revolução Científica";
}

function QS4 () {
    let qst=document.getElementById('qst').innerHTML="Questão 4: Qual é a função principal do núcleo celular?";
    let a1=document.getElementById('b1').innerHTML="a) Produzir energia";
    let a2=document.getElementById('b2').innerHTML="b) Armazenar água";
    let a3=document.getElementById('b3').innerHTML="c) Controlar as atividades celulares";
    let a4=document.getElementById('b4').innerHTML="d) Sintetizar proteínas";
}

function QS5 () {
    let qst=document.getElementById('qst').innerHTML='Questão 5: Quem foi o autor da obra "Dom Quixote", frequentemente considerada um dos primeiros romances modernos?';
    let a1=document.getElementById('b1').innerHTML="a) William Shakespeare";
    let a2=document.getElementById('b2').innerHTML="b) Miguel de Cervantes";
    let a3=document.getElementById('b3').innerHTML="c) Franz Kafka";
    let a4=document.getElementById('b4').innerHTML="d) Leo Tolstoy";
}

c.addEventListener("click", () =>{
q++;
i++;
pts+=10;

if (q===1) {
    QS2();
}
else{
    if(q===2) {
    QS3();
}
else{
    if(q===3) {
    QS4();
}
else{
    if(q===4) {
    QS5();
}
else{
    if(q>4) {

}}}}}})





