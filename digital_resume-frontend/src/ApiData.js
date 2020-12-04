class ApiData {
    constructor(BASE_URL) {
        this.BASE_URL = BASE_URL;
    }


    getAllPrograms = () => fetch(`${this.BASE_URL}/programs`).then((res) => res.json());

    getAllComments = () => fetch(`${this.BASE_URL}/comments`).then((res) => res.json());

    removeComById= (id) => fetch(`${this.BASE_URL}/comments/${id}`).then((res) => res.json());
    



}

 




