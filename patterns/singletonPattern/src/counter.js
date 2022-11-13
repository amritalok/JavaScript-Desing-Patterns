let counter = 0;
let instance;

class Counter {
  constructor() {
    if(instance) {
      throw new Error('instance already exists');
    }
    instance = this;
  }
  getInstance() {
    return this;
  }
  increment(){
    ++counter;
  }
  decrement() {
    --counter;
  }
  getCount(){
    return counter;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;

