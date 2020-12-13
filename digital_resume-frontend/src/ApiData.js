class ApiData {
  
  

  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL;
  
  }
  /// GET returns a promise to be manip in other class
  getAllPrograms = () =>
    fetch(`${this.BASE_URL}/programs`).then((res) => res.json());

  getAllComments = () =>
    fetch(`${this.BASE_URL}/comments`).then((res) => res.json());

  removeComment = (id) =>
    fetch(`${this.BASE_URL}/comments/${id}`, { method: "DELETE" }).then((res) =>
      res.json()
    );
  //// create a new comment
  createComment = (data) => {
    const config = {
      method: "POST",
      headers: {
        /// send and recieves data of a specific type
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
    return fetch(`${this.BASE_URL}/comments`, config)
    .then((res) => res.json())
    
    };
    
  }
  

