function fibonacci(f){
    if(f==0){
        return 0
    }
    if(f==1){
        return 1
    }
    else{
        return fibonacci(f-1) + fibonacci(f-2)
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question(`Ingrese el numero de fibonacci a calcular\n`,
(userInput)=>{
    n = fibonacci(userInput);
    console.log(n);
    rl.close();
});