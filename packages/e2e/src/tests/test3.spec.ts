import axios from 'axios';

describe('GET /', () => {
  it('should return a message', async () => {
    const res = await axios.get(`http://localhost:5000/`);
    console.log(res.status);
    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API Test3' });
  });
});
