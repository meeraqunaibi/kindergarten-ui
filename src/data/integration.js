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
export {
  createStudent
};
