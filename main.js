const prompt = require('prompt-sync') ({sigint: true});

console.log('Time to fish!  It is now 6:00 am.  You have til 12:00 pm to to fish and can only hold 10 lbs worth of fish.');


const fishCaught = []
console.log(fishCaught);

let time = 6;
let numFish = 0;
let totalPounds = 0;
let totalMoney = 0;

while (true) {
    let fish = generateRandomFish();
    let weight = generateRandomWeight();
    let value = generateRandomValue();

    


    console.log('The time is ' + time + ':00am. So far you have caught: ' + numFish + ' fish, ' + Number(totalPounds.toFixed(2)) + ' lbs, $' + Number(totalMoney.toFixed(2)) + '.  You caught a ' + fish + ' weighing ' + weight + ' lbs and valued at $' + value + '.  Would you like to [C]atch or [R]elease?' );
    
    let action = prompt('');
    
    if (action === 'C') {
        time = time + 1;
        numFish = numFish + 1;
        totalPounds = totalPounds + weight;
        totalMoney = totalMoney + value;
        
        newFish = 'name: ' + fish + ', weight: ' + weight + ' lbs, value: $' + value;
        fishCaught.push(newFish);
        for (i = 0; i < fishCaught.length; i++) {
            console.log(fishCaught[i]);
        }
    }

    else if (action === 'R') {
        time = time + 1;
        console.log('');
    }
}

//functions

function generateRandomFish() {
    const fishAdj1 = ['small', 'big', 'large', 'little', 'tropical', 'tiny', 'valuable', 'young', 'cuttle', 'bony'];
    const fishAdj2 = ['blue', 'red', 'yellow', 'purple', 'green', 'orange', 'golden', 'violet', 'magenta', 'turquoise'];
    const typeOfFish = ['amberjack', 'barracuda', 'bass', 'bullhead', 'coalfish', 'trout', 'salmon', 'tilapia', 'halibut', 'hogfish'];
    
    const randomAdj1 = fishAdj1[Math.floor(Math.random()*fishAdj1.length)]; 
    const randomAdj2 = fishAdj2[Math.floor(Math.random()*fishAdj2.length)];
    const typeOfFish2 = typeOfFish[Math.floor(Math.random()*typeOfFish.length)];

    const finalFish = randomAdj1 + ' ' + randomAdj2 + ' ' + typeOfFish2
    return finalFish
    
}
console.log(generateRandomFish()); 

function generateRandomWeight () {
    const randomWeight = Math.round(Math.random()*1000)/100;
    return randomWeight
}
console.log(generateRandomWeight());

function generateRandomValue() {
    const randomValue = Math.round(Math.random()*1000)/100;
    return randomValue
}
console.log(generateRandomValue());
