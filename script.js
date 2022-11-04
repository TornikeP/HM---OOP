alert ("ამით თუ არ დავიწყე რაა ჯავასკრიპტი")

function Car(cMake, cModel, cYear) {
    this.make = cMake;
    this.model = cModel;
    this.year = cYear;
    this.getCarInfo = function() {
        document.write("სახელი" + this.make + "მოდელი" + this.model + "გამოშვების წელი" + this.year)
    }   
}

function Person (pName, pAge, pCars ) {
    this.name = pName;
    this.age = pAge;
    this.cars = pCars;
    this.driveCar = function (car) {
        document.write(" " + "he" + " " + "has" + " " + "a" + " " + car.make + " " + car.model + " " + car.year)
    }
       this.displayInfo = function () {
           document.write (this.name + " " + "is" + " " + this.age + " " + "years" +" " +  "old" + "," )
       }
}


// var bill = new Person ("bill", 13)
// bill.displayInfo()

var tom = new Person ("Tom", 24)
tom.displayInfo()

var cr = new Car ("Tesla", "Model S", 2015)
tom.driveCar(cr)
 




















