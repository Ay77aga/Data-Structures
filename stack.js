// Stack
class Stack {
  constructor() {
    this.stack = [];
    this.length = -1;
  }
  push(ele) {
    this.length++;
    this.stack[this.length] = ele;
  }
  pop() {
    let removed = this.stack[this.length];
    this.length--;
    let update = [];
    for (let i = 0; i <= this.length; i++)
      update.push(this.stack[i]);
    this.stack = update;
    return removed;
  }
  size() {
    return this.length + 1;
  }
  isEmpty() {
    return this.length < 0;
  }
  removeby(el) {
    if (this.stack.includes(el)) {
      let index = this.stack.indexOf(el);
      this.length--;
      return this.stack.splice(index, 1);
    }
    else
      throw new Error(`Not Found => ${el} `);
  }
  print() {
    for (let i of this.stack)
      console.log(i);;
  }
  clear(){
    this.stack = [];
    this.length = -1;
  }
}
export default Stack;
