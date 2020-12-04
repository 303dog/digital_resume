const BASE_URL = 'http://localhost:3000';
const api = new ApiData(`${BASE_URL}`);



document.addEventListener("DOMContentLoaded", () => {

  ProgramData.getPrograms();


  
  





})

















/////// fetchs program data from JSON 
///////  function fetchPrograms() {
///////    fetch(PROG_URL)
///////      .then((res) => res.json())
///////      .then((data) => renderProgCom(data));
///////  }

//// iterates programs

//  function renderProgCom(programs) {
//    const div = document.getElementById("comments");
//    div.innerHTML = "";
//    programs.forEach((program) => (div.innerHTML += progComsHTML(program)));
//  }

//// displays programs and repo/ renders comment button

//  function progComsHTML(program) {
//    return `
//        <div class="prog-coms">
//          <h3>Current Comments for ${program.title}</h3>
//          <a href="${program.repo}">GitHub Repository</a><p>
//          <ul data-program-id="${program.id}">
//           ${commentsHTML(program.comments)}
//          </ul></p>
//          <button class="toggle-comment" data-id=${program.id}>Leave a //Comment</button>
//        </div>
//    `;
//  }
//   
//   



////delete comment
////  function attachDeleteComListener() {
////    document.body.addEventListener("click", toggleDeleteBtn)
////  }
//
// /// function toggleDeleteBtn() {
// ///   if(event.target.dataset.id == "delete-com"){
// ///     const comId = event.target.dataset.id
// ///     renderDelBtn(comId)
// ///   }
// /// }
//   
//  function removeCom() {
//    const delComId = document.getElementById('onclick');
//    delComId.remove()
//  }
//  
//
//});


