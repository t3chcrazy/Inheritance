const Shape = require("./shape")

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }

    calculateArea() {
        return Math.PI*Math.pow(this.radius, 2)
    }

}

module.exports = Circle