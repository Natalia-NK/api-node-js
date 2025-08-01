//1-Array
let integerArray = [1, 2, 3];
console.log(integerArray);
console.log('Length: ' + integerArray.length);
//2-Array
let stringArray: string[] = ['1a', '2b'];
stringArray.push('3c');
console.log('StringArray: ' + stringArray, 'Length: ' + stringArray.length);
//3-Array
let stringArrayToDelete: string[] = ['1a', '2b','3s'];
stringArrayToDelete.pop();
console.log('StringArray: ' + stringArrayToDelete, 'Length: ' + stringArrayToDelete.length);
//4-Array
let numberArray: number[] = [];
numberArray.push(1);
console.log( 'Length: ' + numberArray.length);
numberArray.push(2);
console.log('Length: ' + numberArray.length);
//1-Loops
let numberArrayLoop: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numberArrayLoop.length; i++) {
    console.log(`Element at index ${i}: ${numberArrayLoop[i]}`);
}
//2-Loops
let numberArrayLoops: number[] = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numberArrayLoops.length;i++) {
    sum = sum + numberArrayLoops[i];
}
console.log('Sum: ' + sum);
//3-Loops
let numbersArray: number[] = [1,2,3];
let multiArray: number[] = [];
for (let i = 0; i < numbersArray.length;i++) {
    let number = numbersArray[i] * 2;
    multiArray.push(number);
}
console.log(multiArray);
//4-Loops
let numbArray: number[] = [1,2,3];
for (let i = numbArray.length; i > 0 ;i--) {
    console.log(`Element at index ${i-1}: ${numbArray[i-1]}`);
}