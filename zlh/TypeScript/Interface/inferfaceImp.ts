interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let squareTemp = <Square>{};
squareTemp.color = "blue";
squareTemp.sideLength = 10;
squareTemp.penWidth = 5.0;