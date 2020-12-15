const BASE_URL = 'http://localhost:3000';
const api = new ApiData(`${BASE_URL}`);



document.addEventListener("DOMContentLoaded", () => {

  ProgramCard.getPrograms();
  ProgramCard.attachSortListener();

 
  

});





