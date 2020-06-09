function calcular(){
    let peso 
    let altura 
    let IMC
    peso = document.getElementById('Peso').value;
    altura = document.getElementById('Altura').value;
    IMC = peso / (altura*altura);
    //document.getElementById('resultado').IMC;
    document.getElementById('resultado').value= IMC.toFixed(2)

    if(peso == ''){
        alert('Preencha o campo Peso!')
    }

    if(altura == ''){
        alert('Preencha o campo Altura!')
    }

    
    if(IMC < 18){
        document.getElementById('visor').value=('ATENÇÂO! MAGREZA EXTREMA')
    }else if(IMC >18.5 && IMC<=24.5){
        document.getElementById('visor').value=('NORMAL')
    }else if(IMC>24.5 && IMC<=30.5){
        document.getElementById('visor').value=('SOBREPESO')
    }else if(IMC>30.5){
        document.getElementById('visor').value=('OBESO')
    }
     
    
    
}

function reset(){
    document.getElementById('Peso').value = ' ';
    document.getElementById('Altura').value = ' ';
    document.getElementById('resultado').value= ' ';
    document.getElementById('visor').value = ' ';
}