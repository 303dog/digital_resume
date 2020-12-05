class ProgramCard {   
    static container = document.getElementById('program-div');

    constructor(prog){
        this.prog = prog;
        this.render();
        //this.attachEventListener();
        console.log(this);
                      
    }

    
    static getPrograms() {
            api.getAllPrograms().then((data) => 
                data.forEach((prog) => new ProgramCard(prog)));
       }
  

    render() {
        const item = document.createElement("div");
        item.className = "item";
        item.dataset.id = this.prog.id;
        this.item = item;
        this.renderInnerHTML();
        this.constructor.container.append(item);
    }
  
    //renders program data
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
        };
        
    }
 

    // iterate over comments
   // commentsHTML() {
   //   return comment
   //       .map((comment) => `
   //         <li data-id="${comment.id}">${comment.about} //<p><em>contributor: ${comment.username}</em></p>`);
   //     }

  
//
 //      
//
//
 //        handleDeleteClick = (event) => {
 //            if (event.target.className === "remove") {
 //                const id = this.com.dataset.id;
 //                api.removeComment(id).then((com) => this.commentsHTML(com)); 
 //            }
 //        }  
     