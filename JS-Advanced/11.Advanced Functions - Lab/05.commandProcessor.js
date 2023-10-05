function commandProcessr() {
  let string = "";

  function append(str) {
    string += str;
  }
  function removeStart(n) {
    string = string.slice(n);
  }
  function removeEnd(n) {
    string = string.slice(0, -n);
  }
  function print() {
    console.log(string);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };
}

let proc1 = commandProcessr();
proc1.append("hello");
proc1.append(" there");
proc1.print();
let proc2 = commandProcessr();
proc2.append("hi");
proc2.print();
