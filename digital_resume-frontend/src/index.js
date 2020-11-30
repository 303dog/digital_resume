document.addEventListener("DOMContentLoaded", () => {
  const BASE_URL = 'http://localhost:3000'
  const PROG_URL = `${BASE_URL}/programs`
  const COM_URL = `${BASE_URL}/comments`
  fetchPrograms();
  renderForm();
  attSubListener("post")



  function fetchPrograms() {
    fetch(PROG_URL)
      .then((res) => res.json())
      .then((data) => renderProgCom(data));
  }

  function renderProgCom(programs) {
    const div = document.getElementById("comments");
    div.innerHTML = "";
    programs.forEach((program) => (div.innerHTML += progComsHTML(program)));
  }

  function progComsHTML(program) {
    return `
        <div class="prog-title">
          <h3>Current Comments for ${program.title}</h3>
          <ul>
           ${commentsHTML(program.comments)}
          </ul>
          
          </div>
    `;
  }

  function commentsHTML(comments) {
    return comments.map((comment) => `<li>${comment.about}</li>`).join("");
  }

  function renderForm() {
    const container = document.getElementById("form-container");
    container.innerHTML = "";
    container.innerHTML = `
    <form action="" id="new-comment-form">
        <label for="about"></label>
        <input type="text" name="about" id="">
        <input type="submit" value="Submit your comment">
    </form>
    `;
  }

  function attSubListener(methodType) {
    const form = document.getElementById("new-comment-form")
    if(methodType === "post") {
      form.addEventListener("submit", (e) => postCom(e))
    }
  }

  function postCom(event) {
    event.preventDefault();
    console.log(event)
  }
})


