document.addEventListener("DOMContentLoaded",function () {

const prog = document.getElementById('prog');
const work = document.getElementById('work');

const input = document.getElementById('prog');
input.addEventListener('click', function(event) {
    alert ('test')
});





    fetch("https://localhost:3000/work_exps")
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json)
      
    }) 


    
}
)




