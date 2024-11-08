i18next.init({
    lng: 'pt', // idioma padrão
    resources: {
        pt: {
            translation: {
                "Portfolio": "Portfólio",
                "Sobre Mim": "Sobre Mim",
                "Skills": "Habilidades",
                "Site de Portfólio": "Site de Portfólio",
                "Loja Online": "Loja Online",
                "CRUD Java com SpringBoot": "CRUD Java com SpringBoot",
                "PT": "Português",
                "EN": "Inglês",
                "popup1": "Projetei um site responsivo utilizando HTML, CSS Tailwind, e JavaScript.",
                "popup0": "Utilizando novamente HTML, CSS Tailwind e JavaScript. Projetando esse site para uma empresa Estou na minha cidade. AINDA EM CONSTRUÇÃO",
                "popup2": "Primeiro projeto de site que fiz, utilizando apenas html e css bootstrap5",
                "popup3": "Criei um WebService CRUD de Clientes utilizando Spring Boot e listas em memória, com operações via GET, POST, PUT e DELETE. A API também oferece funcionalidades para filtrar por ID e idade. Tudo é testado com Postman ou Insomnia",
                "Curriculo Menu": "Curriculo HTML",
                "Skill": "Habilidades",
                "CurriculoDevice": "Curriculo HTML",
                "SobreDevice": "Sobre mim",

            }
        },
        en: {
            translation: {
                "Portfolio": "Portfolio",
                "Sobre Mim": "About Me",
                "Skills": "Skills",
                "Site de Portfólio": "Portfolio Site",
                "Loja Online": "Online Store",
                "CRUD Java com SpringBoot": "CRUD Java with SpringBoot",
                "PT": "Portuguese",
                "EN": "English",
                "popup1": "I designed a responsive website using HTML, CSS Tailwind, and JavaScript.",
                "popup0": "Again using HTML, Tailwind CSS and JavaScript.Designing this website for a company I'm in my city. STILL UNDER CONSTRUCTION",
                "popup2": "First website project I made, using only HTML and CSS with Bootstrap5.",
                "popup3": "I created a Client CRUD WebService using Spring Boot and in-memory lists, with operations via GET, POST, PUT, and DELETE. The API also offers functionality to filter by ID and age. Everything is tested with Postman or Insomnia.",
                "Curriculo Menu": "Professional Resume",
                "Skill": "Skill",
                "CurriculoDevice": "Professional Resume",
                "SobreDevice": "About me",

            }
        }
    }
}, function (err, t) {
    // Atualiza o conteúdo da página com a tradução
    updateContent();
});

function updateContent() {
    // Atualiza os links principais

    document.querySelector('a[href="/index.html"]').textContent = i18next.t('Portfolio');
    document.querySelector('a[href="/src/sobremim.html"]').textContent = i18next.t('Sobre Mim');
    document.querySelector('a[href="/src/skills.html"]').textContent = i18next.t('Skills');

    // Atualiza os botões de idioma

    // Atualiza os botões dos projetos
    document.querySelector('#btn-portfolio').textContent = i18next.t('Site de Portfólio');
    document.querySelector('#btn-loja-online').textContent = i18next.t('Loja Online');
    document.querySelector('#btn-crud-springboot').textContent = i18next.t('CRUD Java com SpringBoot');

    // Atualiza os popups
    document.querySelector('#popup-text-1').textContent = i18next.t('popup1');
    document.querySelector('#popup-text-0').textContent = i18next.t('popup0');
    document.querySelector('#popup-text-2').textContent = i18next.t('popup2');
    document.querySelector('#popup-text-3').textContent = i18next.t('popup3');

    document.querySelector('#curriculonav').textContent = i18next.t('Curriculo Menu');
    document.querySelector('#skilldropdown').textContent = i18next.t('Skill');
    document.querySelector('#curriculodropdown').textContent = i18next.t('CurriculoDevice');
    document.querySelector('#sobredropdown').textContent = i18next.t('SobreDevice');
}


// Função para alternar o idioma
function changeLanguage(lng) {
    i18next.changeLanguage(lng, function (err, t) {
        updateContent();
    });
}
