class ComForm {
    
    constructor(progId){
        this.render(progId);
        this.attSubListener("post");
        console.log(this);
        
    }   
    static getComments() {
        api.getAllComments().then((data) => 
        data.forEach((com) => new ProgramData(com)));
    }
    
    render = (id) => {
        const container = document.getElementById("form-container");
        container.innerHTML = "";
        container.innerHTML = `
        <ul>
        <p><b><em>Your feedback is appreciated. Please use the form below.</em><///b></p>
        
        <form action="" id="new-comment-form">
          <input type="hidden" id="" name="program_id" value=${id}/>
          <label for="username"></label>
          <input type="text" name="username" id="" placeholder="Enter your username here. size="40">
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
          <input type="text" name="fav_lang" placeholder="Perferred language to //code..."size="40">
          <br>
          <label for="about"></label>
          <textarea type="text" name="about" id="" placeholder="Leave your comment //here."rows="4"cols="50" ></textarea>
              <br>
              <input type="submit" value="Share Comment">
            </form> 
            </ul>`
    };
    
        attSubListener(methodType) {
           const form = document.getElementById("new-comment-form")
           if(methodType === "post") {
             form.addEventListener("submit", (e) => doComSubmit(e))
           }
         }

        doComSubmit(event) {
            event.preventDefault();
            const formData = {
              about: event.target.about.value,
              experience: event.target.experience.value,
              username: event.target.username.value,
              fav_lang: event.target.fav_lang.value,
              program_id: event.target.program_id.value,
             };
            this.postCom(formData)
        }

        postCom(formData) {
            const config = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(formData),
            };
 



          }
}