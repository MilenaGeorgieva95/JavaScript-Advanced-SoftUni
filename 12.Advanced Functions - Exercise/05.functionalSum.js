function add(num) {
  let sum = 0;

  function inside(numb) {
    sum += numb;
    return inside;
  }
  inside.toString = () => {
    return sum;
  };

  return inside(num);
}

add(4)(3).toString();
add(4)(3).toString();
