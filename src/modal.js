import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

export default function openModal(e) {
    if (e.target.nodeName !== 'IMG') return;

    const instance = basicLightbox.create(`<div><img src=${e.target.src}></div>`);
    instance.show();
}