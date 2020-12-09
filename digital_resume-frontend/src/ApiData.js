class ApiData {
  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL;
  }

  getAllPrograms = () =>
    fetch(`${this.BASE_URL}/programs`).then((res) => res.json());

  getAllComments = () =>
    fetch(`${this.BASE_URL}/comments`).then((res) => res.json());

  removeComment = (id) =>
    fetch(`${this.BASE_URL}/comments/${id}`, { method: "DELETE" }).then((res) =>
      res.json()
    );

  createComment = (data) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
    return fetch(`${this.BASE_URL}/comments`, config).then((res) => res.json());
  };
}
