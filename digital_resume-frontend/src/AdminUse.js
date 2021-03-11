

class AdminUse {
    static container = document.getElementById("admin-container");

    constructor(id) {
        this.program_id = id;
        this.renderForm();
        this.attachEventListener();
      }

      attachEventListener() {
        const adminForm = document.getElementById("new-program-form");
        adminForm.addEventListener("submit", this.handleOnSubmit);
      }

      handleOnClick = (event) => {
        if (event.target.className === "new-program-form") {
          const newProgramForm = document.getElementById(`new-program-form`);
          newProgramForm.innerHTML = "";
          newProgramForm.innerHTML = this.prog.programs
            .map((program) => this.renderProgInnerHTML(program))
            .join("");
            
          this.deleteEventListener(event);
        }
        if (event.target.className === "program-update") {
          const id = event.target.dataset.id;
          confirm("Want to update an entry??.");
          new AdminUse(id);
        }
      };
    

      handleOnSubmit = (event) => {
          this.renderForm()
        event.preventDefault();
        const { about, title, program_lang, focus, repo, project_date, demo } = event.target;
        const data = {
          about: about.value,
          title: title.value,
          program_lang: program_lang.value,
          focus: focus.value,
          project_date: project_date.value,
          demo: demo.value,
          repo: repo.value,
        };
        api.addToResume(data).then(() => {
          //creates new comment via api
          ProgramCard.getPrograms(); ///clears and resets page after comment is stored
        });

        renderForm = () => {
            AdminUse.container.innerHTML = "";
            AdminUse.container.innerHTML += `<ul>
                <div class="new-program-form">
                <p><h3><b><em>Add new projects</em></b></h3></p>
                <form action="" id="new-program-form">
                   <input type="hidden" id="" name="program_id" value=${this.program_id}/>
                   <label for="title"></label>
                   <input type="text" name="title" id="" placeholder="project title..." size="40">
                   <br>
                   <label for="focus">Framework | Library</label>
                   <select id="" name="experience">
                     <option></option>
                     <option value="JavaScript">JavaScript</option>
                     <option value="Ruby">Ruby</option>
                     <option value="Ruby on Rails">Ruby on Rails</option>
                     <option value="React">React</option>
                     <option value="HTML5">HTML5</option>
                     <option value="CSS">CSS</option>
                     <option value="Python">Python</option>
                     <option value="other">other..</option>
                   </select>
                   <br>
                   <label for="repo" id="">Repository</label>
                   <input type="text" name="repo" placeholder="git URL..."size="100">
                   <br>
                   <br>
                   <label for="demo" id="">demo</label>
                   <input type="text" name="demo" placeholder="demo URL..."size="100">
                   <br>
                   <label for="about"></label>
                   <textarea type="text" name="about" id="" placeholder="Application description... "rows="4"cols="50" ></textarea>
                       <br>
                       <input type="submit" value="add to resume">
                       </form>
                       </div> 
                  </ul>`;
          };
        
      };










}