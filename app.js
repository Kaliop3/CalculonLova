const rs=require("readline-sync");
let name1=rs.question("Podaj swoje imię ");
let name2=rs.question("Podaj imię drógiej połowy ");
let vowel ="a,e,i,o,u,y,A,I,E,O,U,Y".split(",");
let sum = 0;
let vowelLook1=0;
let consonant1=0;
let vowelLook2=0;
let consonant2=0;
let love="love";
let howlove=0;
let howlove2=0;

if((name1=="Klaudia"&&name2=="Mateusz")||(name1=="Mateusz"&&name2=="Klaudia")){
    sum+=1000;
}
name1 = name1.split("");
name2 = name2.split("");
if(name1[0]==name2[0]) {
    sum+=20;
    if(vowel.indexOf(name1[0])==-1){
        sum+=5;
    }
    else{
        sum+=10;
    }
} 

for(let i=0;i<name1.length;i++){
    if(vowel.indexOf(name1[i])!=-1){
        vowelLook1++;
    }
    else{
        consonant1++;
    }
    if(love.indexOf(name1[i])!=-1){
        howlove++;
    }
}

for(let i=0;i<name2.length;i++){
    if(vowel.indexOf(name2[i])!=-1){
        vowelLook2++;
    }
    else{
        consonant2++;
    }
    if(love.indexOf(name2[i])!=-1){
        howlove2++;
    }
}
if(vowelLook1==vowelLook2){
    sum+=12;
}
if(consonant1==consonant2){
    sum+=12;
}
if(howlove>0||howlove2>0){
    sum+=7;
}

console.log("Jeteście dopasowani na:  "+(sum*100/61).toFixed(0)+ "%");