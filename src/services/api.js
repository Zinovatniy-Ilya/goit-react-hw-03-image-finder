const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24531011-b5a085c36e41ff34cade6993b';
const NUMBER_OF_PHOTOS = 12;

function fetchImages(requestName, numPage = 1) {
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${requestName}&page=${numPage}&per_page=${NUMBER_OF_PHOTOS}&key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`No images are available on request: ${requestName}`),
    );
  });
}

export { fetchImages, NUMBER_OF_PHOTOS };