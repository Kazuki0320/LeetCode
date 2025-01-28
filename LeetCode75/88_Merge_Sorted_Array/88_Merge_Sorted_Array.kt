function merge(num1: number[],m: number, num2: number[], n: number):void {
  if (m == 0) {
    console.log(num2);
    return;
  } else if(n == 0) {
    console.log(num1);
    return;
  }

  num1 = [...num1.slice(0, m), ...num2];
}

function main() {
  let num1 = [1,2,3];
  const m = 2;
  const num2 = [4,5,6];
  const n = 3;

  const result = merge(num1, m, num2, n);
  console.log(result);
};

main();
