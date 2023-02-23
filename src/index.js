import * as basicLightbox from 'basiclightbox';
const basicLightbox = require('basiclightbox');
import 'basiclightbox/dist/basicLightbox.min.css'
import './sass/styles.scss';

const openModalBtnRef = document.querySelector('button[data-open-modal]');


const modalTemplate = document.querySelector('#modal');
const instance = basicLightbox.create(modalTemplate);
console.log(instanse);


openModalBtnRef.addEventListener('click', () => { instance.show()})






