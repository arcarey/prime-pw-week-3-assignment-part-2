console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++){
  console.log(i);
}
// I had to change the condition that checks the value of i until it would log up to 5


// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<6; i++){
  console.log(i);
}
// I had to change the iterating variable (i) to start with the value of 3

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i=2; i<11; i=i+2){
  console.log(i);
}
// I had to start i at 2, iterate until i is greater than 10, and increment i by 2 each time through the loop. I had to change each perameter of the example loop.

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i >= 0; i-- ) {
  console.log(i);
}


// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (eachStar of stars) {
  console.log(eachStar);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let i=0;
while (i < stars.length){
  console.log(stars[i])
  i++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
i = 0 
//is it bad form to reuse a global variable as an iterator in a new while loop? Would you create a new iterating variable every time with a different name? 
//Or maybe we never come across this in real life because it would always make more sense to use a for-loop when using this sort of counter interval? 
while  (i<6){
  console.log (i);
 i ++
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
i = 10
while (i>4) {
  console.log(i);
  i--
}