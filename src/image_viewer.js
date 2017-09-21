import big from '../assests/big.jpg';
import small from '../assests/small.jpg';
import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);