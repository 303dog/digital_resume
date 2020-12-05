class ComForm {
    static container = document.querySelector('.container');
    
    constructor(com){
        this.com = com;
        this.render();
        this.attachEventListener();
        console.log(this);
    }   
 
   static getComments() {
        api.getAllComments().then((data) => 
          data.forEach((com) => new ComForm(com)));
    }

  render() {
    const form = document.createElement("div");
    form.className = "form";
    form.dataset.id = this.com.id;
    this.form = form;
    this.renderInnerHTML();
    this.constructor.container.append(form);
 }

  renderComInnerHTML() {
      const { about, username, experience, fav_lang, program_id} = this.com;
      this.com.innerHTML = `
         <div class="com-com">
         <h4>Project:${program_id} </h4>
         <h4>About: ${about} </h4>
         <h5>Username: ${username} </h5>
         <h5>Language: ${experience} </h5>
         <h5>Favorite: ${fav_lang} </h5>
         <button class="remove-btn"> Remove</button>
         </div>
  `
}



   /// comment form..  
  renderForm = (id) => {
    const container = document.getElementById("form-container");
    this.item.innerHTML = "";
    this.item.innerHTML += `
    
       <ul>
       <p><b><em>Your feedback is appreciated. Please use the form below.</em></////b></p>
       
       <form action="" id="new-comment-form">
         <input type="hidden" id="" name= program_id value=${id}/>
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
         <textarea type="text" name="about" id="" placeholder="Leave your comment here."rows="4"cols="50" ></textarea>
             <br>
             <input type="submit" value="Share Comment">
             </form> 
             </ul>`;
  };



    
  };
      
  









//    attachEventListener() {
//        this.form.addEventListener("submit", this.handleOnSubmit);
//    }
//
//    handleOnSubmit = (event) => {
//      event.preventDefault();
//      const {about, username, experience, fav_lang, program_id} = event.target;
//      const data = {
//           about: about.value,
//           experience: experience.value,
//           username: username.value,
//           fav_lang: fav_lang.value,
//           program_id: program_id.value,
//      };
//      api.creatComment(data).then((com) => new ProgramCard(com))
//    };
//

//
 //   render() {
 //     const form = document.createElement("form");
 //     form.className = "comment-form";
 //     form.innerHTML = this.renderInnerHTML;
 //     this.form = form;
 //     this.constructor.container.append(form);
 //   };

 //   renderInnerHTML = (id) => {
 //      // const container = document.getElementById("form-container");
 //      // container.innerHTML = "";
 //      // container.innerHTML = `

 //   }
 //           
//
//

 //   
 //   
 //
 ////   doComSubmit(event) {       
 //     event.preventDefault();
 //       const formData = {
 //         about: event.target.about.value,
 //         experience: event.target.experience.value,
 //         username: event.target.username.value,
 //         fav_lang: event.target.fav_lang.value,
 //         program_id: event.target.program_id.value,
 //      };
 //     this.comInnerHTML(formData);
 // }
// }