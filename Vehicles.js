/**
 *  The WajdStack3 Class creates a stack, and methods to use 
 * by the PeekClear.js program.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/12/13
 */
 
class Vehicles {
    
  // Constructors that defines stack array
  constructor(licensePlateInput, colorInput) {
    this.licensePlate = licensePlateInput;
    this.color = colorInput;
    this.speed = 0;
    this.maxSpeed = 240;
  }
  
  // Setter for license plate combination.
  licensePlateSetter(inputLicensePlate) {
    this.licensePlate = inputLicensePlate;
  }
  
  // Getters for license plate combination.
  licensePlateGetter() {
    return this.licensePlate;
  }
  
  // Setter for color.
  colorSetter(carColorUser) {
    this.color = carColorUser;
  }
  
  // Getter for color.
  colorGetter() {
    return this.color;
  }
  
  // Method that calculates the car speed while accelerating.
  accelerationCalculation(speedIncrease) {
    // converting all variables from strings to integers.
    this.maxSpeed = parseInt(this.maxSpeed, 10);
    this.speed = parseInt(this.speed, 10);
    speedIncrease = parseInt(speedIncrease, 10);
    // Proceeding
    if ((this.speed + speedIncrease) > this.maxSpeed) {
      throw null;
    } else {
      this.speed = this.speed + speedIncrease;
    }
    return this.speed;
  }
  
  // Method that calculates the car speed while deceleration.
  decreaseCalculation(speedDecrease) {
    // converting all variables from strings to integers.
    this.speed = parseInt(this.speed, 10);
    speedDecrease = parseInt(speedDecrease, 10);
    // Proceeding
    if ((this.speed - speedDecrease) < 0) {
      throw null;
    } else {
      this.speed = this.speed - speedDecrease;
    }
    return this.speed;
  }
}

// Exporting the class
module.exports = Vehicles;
