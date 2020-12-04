class ProgramData {   
    static container = document.getElementById('program-div');

    constructor(prog){
        this.prog = prog;
        this.render();
        this.attachEventListener();
           console.log(this);
        
    
              
    }

    
    static getPrograms() {
        api.getAllPrograms().then((data ) => 
            data.forEach((prog) => new ProgramData(prog)));
        
    }

    attachEventListener() {
        this.item.addEventListener("click", this.handleForm);
    }

    handleForm = (event) => {
        if(event.target.className === "toggle-comment"){
            const progId = event.target.dataset.id
            new ComForm(progId);
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
  
    
    renderInnerHTML() {
        const {title, repo, program_lang, focus, id} = this.prog;
        this.item.innerHTML += `
            <div class="pro-data">
            <h3><em><u>*${title}</u></em></h3>
            <h5>Code focus: ${focus}</h5>
            <h5>Language used:${program_lang}</h5>
            <a href='${repo}'>GitHub Repository</a>
            <p><button class="current-comment" data-id=${id}>View existing feedback </button></p>
            <p><button class="toggle-comment" data-id=${id}>Leave your own</button></p>
            </div>`
    }

    commentsHTML(comments) {
            console.log(this)
      return comments
          .map((comment) => `
            <li data-id="${comment.id}">${comment.about} <p><em>contributor: $//{comment.username}</em></p>,</li> <button onclick="removeCom()" data-id=${comment.id}>Remove</button>`)
             .join("");
     }
}