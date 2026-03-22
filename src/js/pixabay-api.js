import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const baseUrl = 'https://pixabay.com/api/';

  const options = {
    params: {
      key: '55049647-b8a5550eee026fa1bd35fd901',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  };

  const res = await axios.get(baseUrl, options);
  return res.data;
}
