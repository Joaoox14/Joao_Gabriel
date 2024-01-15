
window.revelar = ScrollReveal({ reset: true })

//TOPO DO SITE
revelar.reveal('.efeito-txt-topo',
    {
        duration: 2000,
        distance: '90px'
    })

revelar.reveal('.efeito-img-topo',
    {
        duration: 1500,
        distance: '90px',
        delay: 500
    })

//TITULOS

revelar.reveal('.titulo',
    {
        duration: 1500,
        distance: '90px'
    })

//SOBRE

revelar.reveal('.efeito-img-sobre',
    {
        duration: 1000,
        distance: '90px',
        delay: 200,
        origin: 'left'
    })

revelar.reveal('.efeito-txt-sobre',
    {
        duration: 1500,
        distance: '90px',
        delay: 400,
        origin: 'right'
    })