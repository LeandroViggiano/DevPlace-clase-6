function potenciaNumerica(){
    n = parseInt(prompt("Ingrese un numero y se lo elevara a la potencia:"))
    p = parseInt(prompt("Muy bien!\nAhora ingrese el numero al que lo quiere elevar:"))

    if ((n > 0){
        if (p > 0){
            potencia = Math.pow(n, p)
            alert("Perfecto.\n" + n + " elevado a la " +  p + "es" + potencia)
        }
        else{
            alert("No se permite numeros neegativos")
        }   
    }