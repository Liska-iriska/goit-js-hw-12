import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loadBtn = document.querySelector('.load-btn');

let currentPage = 1;
let currentQuery = '';

hideLoadMoreButton();

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.currentTarget.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Please fill in the search field!',
      position: 'topRight',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  hideLoadMoreButton();
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    createGallery(data.hits);
    checkButtonStatus(data.totalHits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});

loadBtn.addEventListener('click', async () => {
  currentPage += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    createGallery(data.hits);
    checkButtonStatus(data.totalHits);

    const galleryItem = document.querySelector('.li-item');

    if (galleryItem) {
      const { height: cardHeight } = galleryItem.getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
      position: 'topRight',
    });
    showLoadMoreButton();
  } finally {
    hideLoader();
  }
});

function checkButtonStatus(totalHits) {
  const totalPages = Math.ceil(totalHits / 15);

  if (currentPage >= totalPages) {
    hideLoadMoreButton();
    if (totalPages > 0) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } else {
    showLoadMoreButton();
  }
}
