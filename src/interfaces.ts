// type Options = {
//   width: number;
//   height: number;
//   color: string;
// };

interface RectangleOptions {
  width: number;
  height: number;
  color: string;
}
// so interface is almost similar to type alias

function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let height = options.height;
  let color = options.color;
}

const rectInfo = {
  width: 100,
  height: 50,
  color: "#fffff",
};

drawRectangle(rectInfo); // okay

console.log(drawRectangle(rectInfo));
