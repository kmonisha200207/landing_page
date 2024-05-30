const bodyE1=document.querySelector('body');
const toggleE1=document.querySelector('.fa-moon-o');

toggleE1.addEventListener("click",()=>{
    bodyE1.classList.toggle("dark");
    if(bodyE1.classList.contains("dark"))
    {
        console.log(toggleE1);
        toggleE1.classList.replace("fa-sun-o","fa-sun-o")
        
    }
    else{
        toggleE1.classList.replace("fa-moon-o","fa-sun-o")
        
    }
}
)