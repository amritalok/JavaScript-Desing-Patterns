import singletonCounter from './counter';

let redButton = document.getElementById('red');
redButton.onclick = () => {
  console.log('red button clicked');
  singletonCounter.increment();
  console.log(singletonCounter.getCount());
}

export default redButton;