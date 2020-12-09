class ComForm {
  static container = document.getElementById("container");

  constructor(id) {
    this.program_id = id;
    this.render();
    this.attachEventListener();
    console.log(id);
  }

  attachEventListener() {
    const form = document.getElementById("new-comment-form");
    form.addEventListener("submit", this.handleOnSubmit);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { about, username, fav_lang, experience, program_id } = event.target;
    const data = {
      about: about.value,
      experience: experience.value,
      username: username.value,
      fav_lang: fav_lang.value,

      program_id: program_id.value,
    };
    api.createComment(data).then(() => {
      ProgramCard.getPrograms();
      this.prog.innerHTML = "";
    });
  };

  render = () => {
    const container = document.getElementById("form-container");
    container.innerHTML = "";
    container.innerHTML += `<ul>
         <p><b><em>Your feedback is appreciated. Please use the form below.</em></b></p>

         <form action="" id="new-comment-form">
           <input type="hidden" id="" name="program_id" value=${this.program_id}/>
           <label for="username"></label>
           <input type="text" name="username" id="" placeholder="Enter your username here." size="40">
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
           <input type="text" name="fav_lang" placeholder="Perferred language to code..."size="40">
           <br>
           <label for="about"></label>
           <textarea type="text" name="about" id="" placeholder="Leave your comment here. "rows="4"cols="50" ></textarea>
               <br>
               <input type="submit" value="Share Comment">
               </form> 
          </ul>`;
  };
}
