import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import 'css-loader/dist/loader.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.currentTarget.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Please fill in the search field!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
        position: 'topRight',
      });
      console.log('Error details:', error);
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
});
