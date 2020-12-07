class ComForm {
    static container = document.getElementById('container');
    
    constructor(){
        this.render();
        console.log(this);
    }   
 



    handleOnSubmit = (event) => {     
        event.preventDefault();
        const {about, username, fav_lang, experience, program_id} = this.prog;
        const formData = {
          about: about.value,
          experience: experience.value,
          username: username.value,
          fav_lang: fav_lang.value,
          program_id: program_id.value,
       };
     api.createComment(formData).then((prog) => new ProgramCard(prog));
    }


    render() {
        const form = document.createElement("form");
        form.className = "form";
        form.innerHTML = this.renderInnerHTML();
        this.form = form;
        this.constructor.container.append(form);
    }  

  

   /// comment form..  
    renderInnerHTML = (id) => {
      const container = document.getElementById("container");
        container.innerHTML = "";
        container.innerHTML += `
      
         <ul>
         <p><b><em>Your feedback is appreciated. Please use the form below.</em></b></p>

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
           <textarea type="text" name="about" id="" placeholder="Leave your comment here. "rows="4"cols="50" ></textarea>
               <br>
               <input type="submit" value="Share Comment">
               </form> 
               </ul>`;
    }

  
  };
