import singletonCounter from './counter';

let blueButton = document.getElementById('blue');
blueButton.onclick = () => {
  console.log('blue button clicked');
  singletonCounter.increment();
  console.log(singletonCounter.getCount());
}

export default blueButton;