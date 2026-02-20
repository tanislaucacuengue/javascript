let valores = [1,0,2,9,3,8,4,7,5,6]
valores.sort()

/*for (let pos = 0; pos < valores.length; pos++) {

    console.log(`A posição ${pos} tem os valores ${valores[pos]}`);   
}*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`);   
} 
console.log(valores.indexOf(4))