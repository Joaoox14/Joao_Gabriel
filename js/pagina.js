
document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Obtém o ID da seção correspondente ao link clicado
        var targetId = this.getAttribute('href').substring(1);

        // Oculta todas as seções
        document.querySelectorAll('main section').forEach(function (section) {
            section.style.display = 'none';
        });

        // Exibe apenas a seção correspondente ao link clicado
        document.getElementById(targetId).style.display = 'block';
    });
});
