//Exercise #3 (sugerencia reduce()) Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
//Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. 

let numeros = [5,6,7,8];
 let s = 0;
 let p = 1;
 for ( var i = 0;i <numeros.length; i +=1){
    s+=numeros[i];
    p *= numeros[i];
 }

 console.log('Sum : ' + s + ' Product :  ' + p);

