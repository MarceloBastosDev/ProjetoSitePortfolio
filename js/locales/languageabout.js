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
                "Descrição": "Desenvolvedor Front-End/Back-End",
                "Sobre": "Olá! Meu nome é Marcelo Bastos, Sou Desenvolvedor Full-Stack. Iniciei meu aprendizado no início de 2023, presencialmente pela universidade ULBRA - Torres/RS. Além disso, venho aprendendo através de cursos online para melhorar minhas habilidades, me certificando de que estou aprendendo o suficiente para explorar as mais novas tecnologias.",
                "Tecnologias": "Aqui estão algumas das tecnologias que possuo conhecimento:",
                "Curriculo Menu": "Curriculo HTML",
                "Skill": "Habilidades",
                "CurriculoDevice": "Curriculo HTML",
                "SobreDevice": "Sobre mim"
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
                "Descrição": "Developer Front-End/Back-End",
                "Sobre": "Hello! My name is Marcelo Bastos, I'm a Full-Stack Developer. I started my learning at the beginning of 2023, in person at ULBRA university - Torres/RS. Additionally, I come to learn through online courses to improve my skills, making sure I have learned enough to explore the newest technologies.",
                "Tecnologias": "Here are some of the technologies I have knowledge of:",
                "Curriculo Menu": "Professional Resume",
                "Skill": "Skill",
                "CurriculoDevice": "Professional Resume",
                "SobreDevice": "About me"

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
    document.querySelector('a[href="./sobremim.html"]').textContent = i18next.t('Sobre Mim');
    document.querySelector('a[href="./skills.html"]').textContent = i18next.t('Skills');


    document.querySelector('#curriculonav').textContent = i18next.t('Curriculo Menu');
    document.querySelector('#skilldropdown').textContent = i18next.t('Skill');
    document.querySelector('#curriculodropdown').textContent = i18next.t('CurriculoDevice');
    document.querySelector('#sobredropdown').textContent = i18next.t('SobreDevice');

    // Atualiza os botões dos projetos
    document.querySelector('#description').textContent = i18next.t('Descrição');
    document.querySelector('#sobremim').textContent = i18next.t('Sobre');
    document.querySelector('#tech').textContent = i18next.t('Tecnologias');

}


// Função para alternar o idioma
function changeLanguage(lng) {
    i18next.changeLanguage(lng, function (err, t) {
        updateContent();
    });
}
