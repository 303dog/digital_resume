class ProgramCard {
  static container = document.getElementById("comment-container");

  constructor(prog) {
    this.prog = prog;
    this.renderProgram();
    this.attachEventListener();
  }

  static getPrograms() {
    api.getAllPrograms().then((data) => {
      this.container.innerHTML = "";
      data.forEach((prog) => new ProgramCard(prog));
    });
  }

  /// eventlistener for "new comments" and "exsisting comments" btns
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
                   <h4>About: ${about} </h4>
                   <h5>Username: ${username} </h5>
                   <h5>Language: ${experience} </h5>
                   <h5>Favorite: ${fav_lang} </h5>
                   <button class="remove-btn" data-id=${id}> Remove</button>
                   </div>`;
  };

  ///renders program data including comment btns and a div to contain corresponding comments for easier access
  renderProgInnerHTML() {
    const { title, repo, program_lang, focus, id } = this.prog;
    this.card.innerHTML += `
                    <div class="pro-data">
                    <h3><em><u>*${title}</u></em></h3>
                    <h5>Code focus: ${focus}</h5>
                    <h5>Language used:${program_lang}</h5>
                    <a href='${repo}'>GitHub Repository</a>
                    <p><button class="current-comment" data-id=${id}>View existing feedback </button></p>
                    <p><button class="toggle-comment" data-id=${id}>Leave your own</button></p>
                    <div id="project-${id}-comments"></div>
                    </div>`;
  }
}
