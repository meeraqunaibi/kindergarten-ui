/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
const loginUser = (username, password) => {
  console.log(username);
  return fetch(`http://localhost:3000/auth`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(async (response) => {
      return await response.json();
    })
    .catch((error) => {
      console.log(error.toString());
      alert(error.toString());
    });
};
export {
  loginUser
};

