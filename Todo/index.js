document.querySelector('.addButton').onclick = function(){
    if(document.querySelector('.input_div input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('.container').innerHTML += `
            <div class="container">
                <span id="taskname">
                    ${document.querySelector('.input_div input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var container_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<container_tasks.length; i++){
            container_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}