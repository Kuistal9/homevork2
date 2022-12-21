const student = "Людский Артемий Витальевичь "; // Людский Артемий Витальевичь 

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
const v1 = Array(16).fill([4, 1, 2, 5, 2, 2, 0]);
const s1 = Array(1).fill([0, 0, 2, 2, 0, 0, 0]);
const v2 = Array(23).fill([1, 4, 4, 2, 5, 0, 0]);
const s2 = Array(1).fill([0, 0, 2, 2, 2, 0, 0]);
const k = Array(2).fill([0, 0, 0, 0, 0, 0, 0]);
const array = [v1, s1, k, v2, s2];

const proezd = 120;
const pristavka = 23500;
const naproezd = 150;
const naobed = 250;

let proezd_diff = naproezd - proezd;

let day = 0;
let week = 0;
let kopilka = 0;

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    week = week + 1;
    console.log('номер недели: ' + week);

    for (let k = 0; k < array[i][j].length; k++) {
      let element = array[i][j][k];
      day = day + 1;
      console.log('номер дня: ' + day);
      if (element > 0) {
        kopilka = kopilka + proezd_diff;
        if (element <= 3) {
          kopilka = kopilka + naobed;
          console.log('шекелей: ' + kopilka)
        }
        
      }
      if(pristavka <= kopilka) break
    }
    if(pristavka <= kopilka) break
  }
  if(pristavka <= kopilka) break
}
if(pristavka <= kopilka ){console.log('mission completed', kopilka, day )
}
else{
  console.log('mission faled', day, kopilka);
}
//if (pristavka <= kopilka) {
 // console.log('mission completed', kopilka, day );
//} else {
 // console.log('mission faled', day, kopilka);
//}