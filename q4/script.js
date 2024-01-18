class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  Show() {
    return `(${x},${y})`;
  }

  Equals(p) {
    return this.x == p.x && this.y == p.y ? true : false;
  }
}

const isValuesExistsInArray = (x, y, arr) => {
  for (const key in arr) if (x == arr[key].x && y == arr[key].y) return true;
  return false;
};

const isPointExistsInArray = (arr, p) => {
  let pt = new Point(p.x, p.y);
  for (const key in arr) if (pt.Equals(arr[key])) return true;
  return false;
};

const traficLength = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    res += Math.sqrt(
      Math.pow(arr[i].x - arr[i + 1].x, 2) +
        Math.pow(arr[i].y - arr[i + 1].y, 2)
    );
  }
  return res.toFixed(2);
};

const q1True = (document.querySelector(".q1_True").innerHTML =
  `x = 5, y = 4, [
    Point(3, 2),
    Point(1, 5),
    Point(5, 2),
    Point(5, 4)
  ] returns: ` +
  isValuesExistsInArray(5, 4, [
    new Point(3, 2),
    new Point(1, 5),
    new Point(5, 2),
    new Point(5, 4),
  ]));

const q1False = (document.querySelector(".q1_False").innerHTML =
  `x = 5, y= 4, [
    Point(3, 2),
    Point(1, 5),
    Point(5, 2)
  ] returns: ` +
  isValuesExistsInArray(5, 4, [
    new Point(3, 2),
    new Point(1, 5),
    new Point(5, 2),
  ]));

const q2True = (document.querySelector(".q2_True").innerHTML =
  `
    [ Point(3, 9), Point(1, 5), Point(1, 2), Point(2, 7)],
    Point(1, 2) returns: ` +
  isPointExistsInArray(
    [new Point(3, 9), new Point(1, 5), new Point(1, 2), new Point(2, 7)],
    new Point(1, 2)
  ));

const q2False = (document.querySelector(".q2_False").innerHTML =
  `
    [ Point(3, 9), Point(1, 5), Point(2, 2), Point(2, 7)],
     Point(1, 2) returns: ` +
  isPointExistsInArray(
    [new Point(3, 9), new Point(1, 5), new Point(2, 2), new Point(2, 7)],
    new Point(1, 2)
  ));

const q3_answer = (document.querySelector(".q3_answer").innerHTML =
  `[
     Point(3, 9),
     Point(1, 5),
     Point(2, 2),
     Point(8, 7),
     Point(2, 7),
  ] the length is : ` +
  traficLength([
    new Point(3, 9),
    new Point(1, 5),
    new Point(2, 2),
    new Point(8, 7),
    new Point(2, 7),
  ]));

console.log(
  traficLength([
    new Point(3, 9),
    new Point(1, 5),
    new Point(2, 2),
    new Point(8, 7),
    new Point(2, 7),
  ])
);
