class ProgramData {   
    constructor(prog){
        this.prog = prog;
        this.renderInnerHTML()
;        console.log(this);
    
              
    }

    static getAll() {
        api.getAllPrograms().then((data) => 
            data.forEach((prog) => new ProgramData(prog)))
        
    }

  
    
    renderInnerHTML() {
        const {title, repo, program_lang, focus} = this.prog;
        programDiv.innerHTML += `
        <div class="pro-data">
        <h3>*${title}</h3>
        <h5>${focus}</h5>
        <h5>${program_lang}</h5>
        <h5>${repo}</h5>
        </div>`
        
        
    }

}