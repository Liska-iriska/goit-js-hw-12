import axios from 'axios';

export function getImagesByQuery(query) {
  const baseUrl = 'https://pixabay.com/api/';

  const options = {
    params: {
      key: '55049647-b8a5550eee026fa1bd35fd901',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  return axios.get(baseUrl, options).then(res => res.data);
}
