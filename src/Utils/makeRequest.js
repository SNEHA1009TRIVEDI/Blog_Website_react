import axios from 'axios'; 
const makeRequest = async (method,url,count,isLiked) => {
  const data = await axios({
    method: method,
    url: url,
    data: {
        claps: count,
        liked: isLiked,
    }

  });
  return data;
}
export default makeRequest;