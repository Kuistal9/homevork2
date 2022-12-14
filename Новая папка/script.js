const student = "Людский Артемий Витальевичь "; // Людский Артемий Витальевичь 

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ... 
//let consolp = prompt('голова глаза')
const proz = 120
const dream  = 23500 
let prozmam = prompt('за проезд передаём')
let prozost = prozmam-proz
let obedmam = prompt('подайте на пропитание ради христа')  
const v1 = Array(16).fill([4,1,2,5,2,2,0]);
 s1 = Array(1).fill ([0,0,2,2,0,0,0]);
 v2 = Array(23).fill ([1,4,4,2,5,0,0]);
 s2 = Array(1).fill ([0,0,2,2,2,0,0]);
 k  = Array(2).fill ([0,0,0,0,0,0,0]);
 const array =[v1,s1, k, v2,  s2, ];
 //console.log (array);
let day =0
let weak =0 
let a =0     
let b =0
let c =0
let mony = 0
for(let i =0; i< array.length ; i++  ) { 
     for ( let j =0; j < array[i].length ; j++){
     weak = weak + 1 ;
     console.log ('номер недели: ' + weak);
     for ( let k=0; k < array[i][j].length ;k++){
      let element= array[i][j][k] 

      day = day  + 1;
     
      if ( element > 0 ) { c++; a=c*prozost
      if ( element <=3&& element>0 ){
      b++;       mony = a+obedmam*b
      console.log (day , 'день' , 'можем отложить тк'+ element ,'пар', mony,"rub" )      
    } 
      else
      { console.log (day , 'день',' не можем отложить тк'+ element ,'пар',mony)}    

}
else {console.log ('сидим дома',mony); c==0 }
   
} 
}
}
if (dream<=mony){
  console.log ('mission completed')
}
else{
  console.log ('mission faled' , day, mony )
     
}
console.log (b)      
console.log (c)
console.log (mony) 
