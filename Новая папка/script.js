const student = "Людский Артемий Витальевичь "; // Людский Артемий Витальевичь 

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ... 
let consolp = prompt('голова глаза')
const proz = 120
let prozmam = prompt('за проезд передаём')
let prozost = prozmam-proz
let obedmam = prompt('подайте на пропитание ради христа')  
let prozf=(prozost*6*16+prozost*2)+(5*23*prozost+3*prozost)
let rs1 = [
[4,1,2,5,2,2,0],
[0,0,2,2,0,0,0]
 ] 
let rs2 = [
[1,4,4,2,5,0,0],
[0,0,2,2,2,0,0]
];
let b=0
let b1=0
for (a=0; a<13; a++ ) {
   if (rs1[0][a] <=3&& rs1[0][a] >0  ){b++}
  }
  for(a1=0; a1<13; a1++ ) {
   
    if (rs1[1][a1] <=3&& rs1[1][a1] >0  ){b1++}
   }
  let c=0
  let c1=0
  for (d=0; d<13; d++ ) {
     if (rs2[0][d] <=3 && rs2[0][d] >0 ){c++}
     
    }
    for (d1=0; d1<13; d1++ ) {
      if (rs2[1][d1] <=3 && rs2[1][d1] >0 ){c1++}
 }
 let con = (b*16+b1*1+c*23+c1*1)*obedmam+prozf
alert (con)
if (con>=consolp)
{
  alert ('накопил за н дней')
}
else{
  alert ('накопить не получилось, всего н шекелей')

}