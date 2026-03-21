// let a = [3,9,74];

// let max = a[0];
// for(let i = 0;i< a.length;i++ ){
//     if(a[i]>max){
//         max = a[i]
//     }
// }
// console.log(max);


// let a = 55;
// let b = 35;
// let c = 25;

// let max = 0;

// // for(let i = 0;i < 3;i++){
//     if(a>b && a>c){
//         max = a;
//     }
//     if(b>a && b>c){
//         max = b;
//     }
//     if(c>a && c>b){
//         max = c;
//     }
// // }

// console.log(max)

// function check(n){
//     if(n < 0){
//         console.log("negative")
//     }
//     else if(n > 0){
//         console.log("positive")
//     }
//     else{
//         console.log("0")
//     }

// }

// let total = 0
// function calculatebill(unit){
    

//     if(unit <=100){
//         temp =  unit
//        total += temp * 5
//        unit = unit - temp
//        return total
//     }
//     else if(unit <=200){
//        temp =  unit - 100
//        total += temp * 7
//        unit = unit - temp
//        return calculatebill(unit)
        
//     }
//     else if(unit <=300){
//         temp =  unit - 200
//        total += temp * 10
//        unit = unit - temp
//        return calculatebill(unit)
        
//     }else{
//        temp =  unit - 300
//        total += temp * 12
//        unit = unit - temp
//        return calculatebill(unit)
//     }
    
// }

// console.log(calculatebill(200))