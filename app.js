const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

//console.log(sectBtn);

function pageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
            sectBtn[i].addEventListener('click', function(){ //revisa cual de los 4 botones ha sido presionado
                let currentBtn = document.querySelectorAll('.active-btn'); //verifica que elemento actual está activo
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', ' '); // al btn que tiene active se lo quitamos
                this.className += ' active-btn'; // le agregamos active al ememnto sectBTn[i] seleccioandos
            })
    }
    
    //sections active
    allSections.addEventListener('click',(e) =>{
        console.log(e.target);
        const id = e.target.dataset.id;
        if(id){
            //remove selected from other btns
            sectBtns.forEach((btn) =>{          
                btn.classList.remove('active');
            })
            e.target.classList.add('active');   //active the new btn

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
             element.classList.add('active');   //active new section
        }
    })
    //Toogle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
    
}

pageTransitions();