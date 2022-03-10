import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer iI-fGKEaW5CU2vSh-Zpwca49u5qBUdQir4gCobM6psdiJmmH0zvPni7HatgWCL8_I3GHtllrukh3tYvbmb0ZqveXtH7Yz2gJu3u5KPMaWKCSgToa6qJUOp1VWakpYnYx',
  },
});
