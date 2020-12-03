class ApiData {
    constructor(BASE_URL) {
        this.BASE_URL = BASE_URL;
    }


    getAllPrograms = () => fetch(`${this.BASE_URL}/programs`).then((res) => res.json());
    



}

 




