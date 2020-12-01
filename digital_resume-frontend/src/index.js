document.addEventListener("DOMContentLoaded", () => {
  const BASE_URL = 'http://localhost:3000'
  const PROG_URL = `${BASE_URL}/programs`
  const COM_URL = `${BASE_URL}/comments`
  fetchPrograms();
  attachCommentToggleListener()


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
        <div class="prog-coms">
          <h3>Current Comments for ${program.title}</h3>
          <a href="${program.repo}">REPO</a>
          <ul data-program-id="${program.id}">
           ${commentsHTML(program.comments)}
          </ul>
          <button class="toggle-comment" data-id=${program.id}>Leave a Comment</button>
        </div>
    `;
  }

  function attachCommentToggleListener(){
    document.body.addEventListener("click", toggleForm)
  }

  function toggleForm(){
    if(event.target.className === "toggle-comment"){
      const progId = event.target.dataset.id
      renderForm(progId)
    }
  }

  function commentsHTML(comments) {
    return comments
        .map((comment) => `<li data-id="${comment.id}">${comment.about} <p><em>contributor: ${comment.username}</em></p></li>`)
        .join("");
  }

  function renderForm(id) {
    const container = document.getElementById("form-container");
    container.innerHTML = "";
    container.innerHTML = `
    <ul>
    <p><b><em>Your feedback is appreciated. Please use the form below.</em></b></p>
    <form action="" id="new-comment-form">
      <hidden_field id="" name="program_id" value=${id}></hidden_field>
      <label for="username"></label>
      <input type="text" name="username" id="" placeholder="Enter your username here..."     size="40">
      <br>
      <label for="experience">Years of programming experience?</label>
      <select id="" name="experience">
        <option></option>
        <option value="1">-1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <br>
      <label for="fav_lang" id=""></label>
      <input type="text" name="fav_lang" placeholder="Perferred language to code..." size="40">
      <br>
      <label for="about"></label>
      <textarea type="text" name="about" id="" placeholder="Leave your comment here...  "rows="4" cols="50" ></textarea>
      <br>
      <input type="submit" value="Share Comment">
    </form> 
    </ul>
    `;
    attSubListener("post")
  }

  function attSubListener(methodType) {
    const form = document.getElementById("new-comment-form")
    if(methodType === "post") {
      form.addEventListener("submit", (e) => doComSubmit(e))
    }
  }
// accept submit button function//
  function doComSubmit(event) {
    event.preventDefault();
    const formData = {
      about: event.target.about.value,
      experience: event.target.experience.value,
      username: event.target.username.value,
      fav_lang: event.target.fav_lang.value,

    };
    postCom(formData)
  }
// post commment//
  function postCom(data) {
    const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch(COM_URL, config)
      .then(res => res.json())
      .then(data => console.log(data));
  }
  
//delete func ///
  document.getElementById("comments").onclick = function() {delCom()};

    function delCom() {
      document.getElementById("comments")
    }

  


  


});


