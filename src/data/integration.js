const createStudent = (student) => {
  console.log(student);
  return fetch(`http://127.0.0.1:3001/students/add`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)

    })
    .then((response) => {
      const result = response.json();
      console.log(result);
    }).catch((error) => {
      alert(error.toString());
    });
};

const getStudent = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:3001/students/${id}`);
    if (response.status === 200) {
      const item = await response.json();
      return item;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
const getAllStudent = () => {
  return fetch(`http://127.0.0.1:3001/students`)
    .then((response) => response.json())
    .catch((error) => {
      alert(error.toString());
    });
};
const getAllPost = () => {
  return fetch(`http://127.0.0.1:3001/posts`)
    .then((response) => response.json())
    .catch((error) => {
      alert(error.toString());
    });
};
const createPost = (post) => {
  console.log(post);
  return fetch(`http://127.0.0.1:3001/posts/add`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)

    })
    .then((response) => {
      const result = response.json();
      console.log(result);
    }).catch((error) => {
      alert(error.toString());
    });
};

export {
  createStudent,
  getStudent,
  getAllStudent,
  getAllPost,
  createPost
};
