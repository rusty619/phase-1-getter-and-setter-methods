// Add your Circle class here
class Circle {
   //#pi
    constructor(radius){
        this.radius = radius
        this.pi = Math.floor(Math.PI * 1000) / 1000;
    }

    // set pi(pi){
    // this.pi = pi
    // }


    get diameter () {
        return 2 * this.radius
    }
    
    get circumference () {
        return this.diameter * this.pi
    }

    get area (){
        return this.pi * Math.pow(this.radius,2)
    }

    set diameter(num) {
        //this.diameter = num
        this.radius = num/2
    }

    set circumference(num){
        this.radius = Math.floor(num/(2*this.pi) * 1000) / 1000
    }

    set area(num) {
        this.radius = Math.floor(Math.sqrt(num/this.pi) * 1000) / 1000
    }
}

let a = new Circle(6)
a.area = 200
console.log(a.radius)
