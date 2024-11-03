 let random=Math.random();
let first,second,third;
// 0.33 0.66 1
if(random<0.33){
    first='crazy';
}
else if(random<0.66 && random>0.33){
    first='Amazing'
}
else{
    first='Fire'
}


random=Math.random();
if(random<0.33){
    second='Engine';
}
else if(random<0.66 && random>0.33){
    second='Foods'
}
else{
    second='Garments'
}



random=Math.random();
if(random<0.33){
    third='bros';
}
else if(random<0.66 && random>0.33){
    third='limited'
}
else{
    third='hub'
}

document.write(`${first} ${second} ${third}`);




