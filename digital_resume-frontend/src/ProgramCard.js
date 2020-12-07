class ProgramCard {   
    static container = document.getElementById('comment-container');

    constructor(prog){
        this.prog = prog;
        this.render();
        this.attachEventListener();
        console.log(this);
                      
    }

    
        static getPrograms() {
                api.getAllPrograms().then((data) => 
                    data.forEach((prog) => new ProgramCard(prog)));
        }

               // gets all comments from api
      //  static getComments() {
      //          api.getAllComments().then((data) => 
      //              data.forEach((prog) => new ProgramCard(prog)));
      //  }

            attachEventListener() {
                this.item.addEventListener("click", this.handleComClick);
                this.item.addEventListener("click", this.handleFormClick);
                this.item.addEventListener("submit", this.handleOnSubmit);
            }
        
   //         deleteEventListener = () => {
   //             const remove = document.getElementById("comments");
   //             remove.addEventListener("click", (event) => this.removeComment(event));
   //         }
   //         
   //         removeComment = (event) => {
   //         if (event.target.className === "remove-btn") {
   //             const del_id = event.target.parentElement.dataset.id;
   //             api.removeComent(del_id);
   //         };
   //     }
        
            handleFormClick = (event) => {
                if (event.target.className === "toggle-comment") {
                    const id = this.item.dataset.id;
                    new ComForm(id);
                };
            }
        
            handleComClick = (event) => {
                if(event.target.className === "current-comment") {
                    const id = this.item.dataset.id;
                    this.renderComInnerHTML(id);
                };
            }
        
            render() {
                const item = document.createElement("div");
                item.className = "item";
                item.dataset.id = this.prog.id;
                this.item = item;
                this.renderInnerHTML();
                this.constructor.container.append(item);
            }
        
        
            renderComInnerHTML(id) {
                const { about, username, experience, fav_lang, program_id} = this.prog;
                container.innerHTML = "";
                container.innerHTML += `
                   <div class="comments">
                   <input type="hidden" id="" name= program_id value=${id}/>
                   <h4>Project:${program_id} </h4>
                   <h4>About: ${about} </h4>
                   <h5>Username: ${username} </h5>
                   <h5>Language: ${experience} </h5>
                   <h5>Favorite: ${fav_lang} </h5>
                   <button class="remove-btn"> Remove</button>
                   </div>`;
            
            }
        

            //renders program data
            renderInnerHTML() {
                const {title, repo, program_lang, focus, id} = this.prog;
                this.item.innerHTML = "";
                this.item.innerHTML += `
                    <div class="pro-data">
                    <h3><em><u>*${title}</u></em></h3>
                    <h5>Code focus: ${focus}</h5>
                    <h5>Language used:${program_lang}</h5>
                    <a href='${repo}'>GitHub Repository</a>
                    <p><button class="current-comment" data-id=${id}>View existing feedback </button></p>
                    <p><button class="toggle-comment" data-id=${id}>Leave your own</button></p>
                    </div>`
            };


}
        

