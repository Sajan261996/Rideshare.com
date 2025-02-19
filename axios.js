import axios from 'axios';

const fetchRides = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/rides');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching rides:', error);
  }
};
