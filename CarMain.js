/**
 * The TryCatchPop file adds integer added by the 
 * user to the stack array and it pops it off the stack. It also checks
 * whether the stack is empty or not and doesn't crash.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/12/13
 */
 
// Importing the class WajdStack from another file
const Vehicles = require("./Vehicles");

// Imports prompt
const prompt = require('prompt-sync')({sigint: true});


// Declaring variables used:
let licensePlateCar = "";
let carColorUser = "";
let licensePlateCar1Change = "";
let colorCar1Change = "";
let speedChange = 0;

// Try Catch Statement:
try {
  
  // Input / Process / Output
  
  // Car #1
  
  // Getting license plate number for car#1:
  licensePlateCar = prompt(`Enter your license plate number of your first car: `);
  
  // Getting car color of the first car:
  carColorUser = prompt(`Enter the color of your first car: `);
  
  // // Printing out the first car's information:
  let firstCar = new Vehicles(licensePlateCar, carColorUser); 
  console.log(``);
  console.log(`Here are your first car's information: `);
  console.log(`License plate #: ${firstCar.licensePlateGetter()}.`);
  console.log(`Car color: ${firstCar.colorGetter()}`);
  console.log(``);
  
  // Car #2
  
  // Getting license plate number for car#2:
  licensePlateCar = prompt(`Enter your license plate number of your second car: `);
  
  // Getting car color of the first car:
  carColorUser = prompt(`Enter the color of your second car: `);
  
  // // Printing out the first car's information:
  let secondCar = new Vehicles(licensePlateCar, carColorUser); 
  console.log(``);
  console.log(`Here are your second car's information: `);
  console.log(`License plate #: ${secondCar.licensePlateGetter()}.`);
  console.log(`Car color: ${secondCar.colorGetter()}`);
  
  // Chaning cars information:
  // Changing car#1 licence plate number:
  console.log(``);
  console.log(`Your license plate on your first car is outdated. You need a new plate!`);
  console.log(`Please enter a valid license plate number: `);
  licensePlateCar1Change = prompt(``);
  firstCar.licensePlateSetter(licensePlateCar1Change);
  console.log(`Your new license plate number: ${firstCar.licensePlateGetter()}`);
  
  // Changing car#1 color:
  console.log(``);
  console.log(`Your first car's body is rusty. You need a new paint job!`);
  console.log(`Please enter a color to paint your car:`);
  colorCar1Change = prompt(``);
  firstCar.colorSetter(colorCar1Change);
  console.log(`Your new car color: ${firstCar.colorGetter()}`);
  
  // Chaning cars speeds:
  // Acceleration:
  console.log(``);
  console.log(`Go take your second car for a test ride`);
  console.log(`How fast do you want to go? in KM/H`);
  speedChange = prompt(``);
  // Returning speed:
  console.log(`Your car is travelling at ${secondCar.accelerationCalculation(speedChange)} KM/H`);  
  
  // Deceleration:
  console.log(``);
  console.log(`There are traffic up head!`);
  console.log(`SLOW DOWN!`);
  console.log(`How much do you want to decrease your speed? in KM/H`);
  speedChange = prompt(``);
  // Returning speed:
  console.log(`Your car is travelling at ${secondCar.decreaseCalculation(speedChange)} KM/H`); 
  
  
// Error Catch Statement:
} catch(err) {
    console.log (`ERROR. Your car isn't able to do such thing!`);
}
