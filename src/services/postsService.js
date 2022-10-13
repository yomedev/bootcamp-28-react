import axios from "axios";

const postsApi = axios.create({
  baseURL: 'http://70.34.201.18:8080',
  params: {
    limit: 9
  }
})

export const getPostsService = async (params = { page: 1 }) => {
  const { data } = await postsApi.get('/posts', { params })
  console.log(data);
  return data
  // throw new Error();
}
