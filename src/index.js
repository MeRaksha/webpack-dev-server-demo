import print from './print'

function component() {
  const element = document.createElement('div');

  element.innerHTML =  'hello Webpack';
  print();
  return element;
}

document.body.appendChild(component());