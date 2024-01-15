


















let trilho = document.getElementById ('trilho')

//quand terminar de fazer o primeiro
let body = document.querySelector ('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    //quand terminar de fazer o primeiro
    body.classList.toggle('dark')
})