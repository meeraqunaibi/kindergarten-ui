const createStudent = (student) => {
  return fetch(`http://127.0.0.1:3001/students/add`, {
    method: "POST",
    body: student,
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error(response);
    }
    return true;
  });
};
const createUser = (user) => {
  console.log(user);
  return fetch(`http://127.0.0.1:3001/users/confirm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      const result = response.json();
      console.log(result);
    })
    .catch((error) => {
      alert(error.toString());
    });
};

const getStudent = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:3001/students/${id}`);
    if (response.status === 200) {
      const item = await response.json();
      console.log(response);
      return item;
    } else {
      return null;
    }
  } catch (error) {
    alert(error.toString());
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
  return fetch(`http://127.0.0.1:3001/posts/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then()
    .catch((error) => {
      alert(error.toString());
    });
};
const createFeedback = (feedback) => {
  return fetch(`http://127.0.0.1:3001/kindergartenFeedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedback),
  }).catch((error) => {
    alert(error.toString());
  });
};

const deleteStudent = async (id) => {
  await fetch(`http://127.0.0.1:3001/students/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.status >= 200 && res.status <= 299) {
      console.debug("Successfully delete student");
      return true;
    } else {
      console.debug("Failed", res.status);
    }
  });
};
const getFeedback = async (id) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:3001/kindergartenFeedback/${id}`
    );
    if (response.status === 200) {
      const item = await response.json();
      console.log(response);
      return item;
    } else {
      return null;
    }
  } catch (error) {
    alert(error.toString());
  }
};
const getAllConfirm = () => {
  return fetch(`http://127.0.0.1:3001/students/confirm-register`)
    .then((response) => response.json())
    .catch((error) => {
      alert(error.toString());
    });
};
export {
  createStudent,
  getStudent,
  getAllStudent,
  getAllPost,
  createPost,
  createFeedback,
  deleteStudent,
  createUser,
  getFeedback,
  getAllConfirm,
};
