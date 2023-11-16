class AreaAndPerimeter{
    constructor(dai,rong){
        this.dai = dai;
        this.rong = rong;
    }

    get area(){
        return this.dai * this.rong
    }

    get perimeter(){
        return (this.dai + this.rong) * 2;
    }
}
const a = new AreaAndPerimeter(10,5);
console.log(a.area);

const b = new AreaAndPerimeter(10,2);
console.log(b.perimeter);