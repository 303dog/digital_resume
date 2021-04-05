class ProgramCard {
  static container = document.getElementById("comment-container");
  static allArray = [];

  constructor(prog) {
    this.prog = prog;
    this.renderProgram();
    this.attachEventListener();
    ProgramCard.allArray.push(this); 
  }

  static getPrograms() {
    api.getAllPrograms().then((data) => {
      this.container.innerHTML = "";
      data.forEach((prog) => new ProgramCard(prog));
    });
  }

  static sortByCommentClick = (event) => {
    if (event.target.className === "sort") {
      const sorted1 = ProgramCard.allArray;
      sorted1.sort(function (a, b) {
        return b.prog.comments.length - a.prog.comments.length;
      }); 
    this.container.innerHTML = ''; 
    sorted1.forEach(function(programcard) { 
    programcard.renderProgram();
    });
   };
    }  

  /// eventlistener for "new comments" and "existing comments" btns
  attachEventListener() { 
    this.card.addEventListener("click", this.handleOnClick);
  }

  /// eventlistener for "remove" btn
  deleteEventListener = () => {
    const comId = document.getElementById(`project-${this.prog.id}-comments`);
    comId.addEventListener("click", (event) => this.removeCommentClick(event));
  };

  /// delete comments
  removeCommentClick = (event) => {
    if (event.target.className === "remove-btn") {
      const id = event.target.parentElement.lastElementChild.dataset.id;
      api.removeComment(id).then(() => {
        confirm("You are about to delete this comment, are you sure?");
        ProgramCard.getPrograms();
      });
    }
  }; 

  /// handles eventlistener between "new comments" and "exsisting comments" btns
  handleOnClick = (event) => {
    if (event.target.className === "current-comment") {
      const container = document.getElementById(
        `project-${this.prog.id}-comments`
      );
      container.innerHTML = "";
      container.innerHTML = this.prog.comments 
        .map((comment) => this.renderComInnerHTML(comment))
        .join("");
        this.deleteEventListener(event);
      }
      if (event.target.className === "toggle-comment") {
        const id = event.target.dataset.id;
        confirm("Scroll up to complete the comment form.");
        new ComForm(id);
      }
  };

  renderProgram() {
    const card = document.createElement("container");
    this.card = card;
    this.renderProgInnerHTML();
    this.constructor.container.append(card);
  }

  /// renders comments of corresponding prjects
  renderComInnerHTML = (comment) => {
    const { about, username, experience, fav_lang, id } = comment;
    return `
          <div class="comments">
          <h4>Comment: ${about} </h4>
          <h5>Username: ${username} </h5>
          <h5>Language: ${experience} </h5>
          <h5>Favorite: ${fav_lang} </h5>
          <button class="remove-btn" data-id=${id}> Remove</button>
          </div>`;
  };

  ///renders program data including comment btns and a div to contain corresponding comments for easier access
  renderProgInnerHTML() {
    let { title, repo, demo, about, program_lang, focus, id } = this.prog;
    this.card.innerHTML = "";
    this.card.innerHTML += `
          <div class="pro-data">
          <h3><u>${title}</u></h3>
          <h4><em>${about}</em></h4>
          <div class="stats">
          <h5>Code focus: <em>${focus}</em></h5>
          <h5>Library | Framework: <em>${program_lang}</em></h5>
          <a onclick="window.open('${demo}', '_blank', 'location=yes,height=400,width=520,status=yes');">Demo Video</a>
          <p></p>
          <a onclick="window.open('${repo}', '_blank', 'location=yes,height=400,width=520,status=yes');">GitHub Repository</a>
          <p><button class="current-comment" data-id=${id}>View existing feedback </button></p>
          <p><button class="toggle-comment" data-id=${id}>Leave Feedback</button></p>
          <div id="project-${id}-comments"></div>
          </div>
          </div>`;
  }
}
