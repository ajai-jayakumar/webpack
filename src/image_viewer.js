import small from '../assests/small.jpg';

export default () => {
    const image = document.createElement('img');
    image.src = small;

    document.body.appendChild(image);
};


//  Note :::
//  export is not mandatory, if export is used then in index.js need to define 
//  "module.default();" else just function call is enough.

//import big from '../assests/big.jpg';
// const bigImage = document.createElement('img');
// bigImage.src = big;
// document.body.appendChild(bigImage); 