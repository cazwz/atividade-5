
function chama() {
    //document.body.style.backgroundColor = "red";
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let batata = a + b;
    //alert("SOMA IGUAL A " + soma);
    console.log("SOMA IGUAL A " + batata)
    //devolver o resultado para a tela
    document.getElementById("resultado").innerHTML = "SOMA IGUAL A " + soma
}
//ponto de mínimo / máximo
function exercicio1() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let xv = -b/(2*a);
    let delta = b*b - 4*a*c;
    let yv = -delta/(4*a);
    //devolver o resultado para a tela
    document.getElementById("resultado").innerHTML = "O PONTO É (" + xv.toFixed(2) + "," + yv.toFixed(2) + ")";

}

function exercicio2() {
    let t = document.getElementById("temp").value;
    console.log("Temp="+ t )
    let escala = document.getElementById("converter").value;
    console.log("Para " + escala) ;
    if(escala == "C"){
        resultado = (t - 32)*5/9
        document.getElementById("saida").innerHTML = temp + "F vale" + resultado + "C"
    }
    else{
        resultado = 9*t/5 + 32
        document.getElementById("saida").innerHTML = temp + "C vale" + resultado + "F"

    }
}

function exercicio3() {
    let opcao = parseInt(document.getElementById("opcao").value);
    console.log("opcao= " + opcao)

    if(opcao == 1 ){
        resultado = 0.3*valor;
        document.getElementById("saida").innerHTML = resultado + "e 30% de " + valor
    }

    else if(opcao == 2){
        resultado = 1.3*valor;
        document.getElementById("saida").innerHTML = resultado + "e 30% de " + valor

    else {
        resultado = 0.7*valor;
        document.getElementById("saida").innerHTML = resultado + "e 30% de " + valor
    }    
    }
    }

