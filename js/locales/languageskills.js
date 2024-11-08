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
                "PT": "BR",
                "EN": "Eng",
                "Habilidades": "Habilidades",
                "Paragrafo1": "Desde o início da minha jornada como desenvolvedor, pude aprimorar minhas soft skills, sempre buscando ser um profissional melhor.",
                "Titulo1": "<não parar de aprender>",
                "Texto1": "A tecnologia nunca para de melhorar, é por isso que quem trabalha com tecnologia também nunca para de aprender.",
                "Titulo2": "<comunicativo>",
                "Texto2": "Não importa sua profissão, a comunicação é sempre necessária em todos os setores.",
                "Titulo3": "<mente aberta>",
                "Texto3": "Quando você trabalha para pessoas, você aceita novas ideias de clientes ou colegas de equipe e é capaz de trabalhar nelas.",
                "Titulo4": "<criativo>",
                "Texto4": "Ser criativo ajuda a encontrar soluções inovadoras para problemas complexos.",
                "Titulo5": "<colaborativo>",
                "Texto5": "Trabalhar em equipe é essencial para o sucesso em projetos de tecnologia.",
                "Titulo6": "<dedicado>",
                "Texto6": "Dedicação é fundamental para alcançar resultados e superar desafios.",
                "bprevious": "Anterior",
                "bnext": "Próximo",
                "TituloDevice1": "<não parar de aprender>",
                "TextoDevice1": "A tecnologia nunca para de melhorar, é por isso que quem trabalha com tecnologia também nunca para de aprender.",
                "TituloDevice2": "<comunicativo>",
                "TextoDevice2": "Não importa sua profissão, a comunicação é sempre necessária em todos os setores.",
                "TituloDevice3": "<mente aberta>",
                "TextoDevice3": "Quando você trabalha para pessoas, você aceita novas ideias de clientes ou colegas de equipe e é capaz de trabalhar nelas.",
                "TituloDevice4": "<criativo>",
                "TextoDevice4": "Ser criativo ajuda a encontrar soluções inovadoras para problemas complexos.",
                "TituloDevice5": "<colaborativo>",
                "TextoDevice5": "Trabalhar em equipe é essencial para o sucesso em projetos de tecnologia.",
                "TituloDevice6": "<dedicado>",
                "TextoDevice6": "Dedicação é fundamental para alcançar resultados e superar desafios.",
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
                "PT": "BR",
                "EN": "Eng",
                "Habilidades": "Skills",
                "Paragrafo1": "Since the beginning of my journey as a developer, I have been able to improve my soft skills, always seeking to be a better professional.",
                "Titulo1": "<non-stop learning>",
                "Texto1": "Technology never stops improving, which is why those who work with technology also never stop learning.",
                "Titulo2": "<comunicative>",
                "Texto2": "No matter your profession, communication is always necessary in every industry",
                "Titulo3": "<open minded>",
                "Texto3": "When you work for people, you accept new ideas from clients or teammates and are able to work on them.",
                "Titulo4": "<creative>",
                "Texto4": "Being creative helps you find innovative solutions to complex problems.",
                "Titulo5": "<collaborative>",
                "Texto5": "Working as a team is essential for success in technology projects.",
                "Titulo6": "<dedicated>",
                "Texto6": "Dedication is essential to achieve results and overcome challenges.",
                "bprevious": "Previous",
                "bnext": "Next",
                "TituloDevice1": "<non-stop learning>",
                "TextoDevice1": "Technology never stops improving, which is why those who work with technology also never stop learning.",
                "TituloDevice2": "<comunicative>",
                "TextoDevice2": "No matter your profession, communication is always necessary in every industry",
                "TituloDevice3": "<open minded>",
                "TextoDevice3": "When you work for people, you accept new ideas from clients or teammates and are able to work on them.",
                "TituloDevice4": "<creative>",
                "TextoDevice4": "Being creative helps you find innovative solutions to complex problems.",
                "TituloDevice5": "<collaborative>",
                "TextoDevice5": "Working as a team is essential for success in technology projects.",
                "TituloDevice6": "<dedicated>",
                "TextoDevice6": "Dedication is essential to achieve results and overcome challenges.",
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

    // Atualiza os botões de idioma

    // Atualiza os botões dos projetos
    document.querySelector('#Hab').textContent = i18next.t('Habilidades');
    document.querySelector('#paragrafo1').textContent = i18next.t('Paragrafo1');

    document.querySelector('#titulo1').textContent = i18next.t('Titulo1');
    document.querySelector('#texto1').textContent = i18next.t('Texto1');
    document.querySelector('#titulo2').textContent = i18next.t('Titulo2');
    document.querySelector('#texto2').textContent = i18next.t('Texto2');
    document.querySelector('#titulo3').textContent = i18next.t('Titulo3');
    document.querySelector('#texto3').textContent = i18next.t('Texto3');
    document.querySelector('#titulo4').textContent = i18next.t('Titulo4');
    document.querySelector('#texto4').textContent = i18next.t('Texto4');
    document.querySelector('#titulo5').textContent = i18next.t('Titulo5');
    document.querySelector('#texto5').textContent = i18next.t('Texto5');
    document.querySelector('#texto4').textContent = i18next.t('Texto4');
    document.querySelector('#titulo6').textContent = i18next.t('Titulo6');
    document.querySelector('#texto6').textContent = i18next.t('Texto6');


    document.querySelector('#titulodevice1').textContent = i18next.t('TituloDevice1');
    document.querySelector('#textodevice1').textContent = i18next.t('TextoDevice1');
    document.querySelector('#titulodevice2').textContent = i18next.t('TituloDevice2');
    document.querySelector('#textodevice2').textContent = i18next.t('TextoDevice2');
    document.querySelector('#titulodevice3').textContent = i18next.t('TituloDevice3');
    document.querySelector('#textodevice3').textContent = i18next.t('TextoDevice3');
    document.querySelector('#titulodevice4').textContent = i18next.t('TituloDevice4');
    document.querySelector('#textodevice4').textContent = i18next.t('TextoDevice4');
    document.querySelector('#titulodevice5').textContent = i18next.t('TituloDevice5');
    document.querySelector('#textodevice5').textContent = i18next.t('TextoDevice5');
    document.querySelector('#titulodevice6').textContent = i18next.t('TituloDevice6');
    document.querySelector('#textodevice6').textContent = i18next.t('TextoDevice6');

    // Atualiza os popups
    document.querySelector('#curriculonav').textContent = i18next.t('Curriculo Menu');
    document.querySelector('#skilldropdown').textContent = i18next.t('Skill');
    document.querySelector('#curriculodropdown').textContent = i18next.t('CurriculoDevice');
    document.querySelector('#sobredropdown').textContent = i18next.t('SobreDevice');

    document.querySelector('#bprevious').textContent = i18next.t('bprevious');
    document.querySelector('#bnext').textContent = i18next.t('bnext');
    document.querySelector('#popup-text-3').textContent = i18next.t('popup3');
}


// Função para alternar o idioma
function changeLanguage(lng) {
    i18next.changeLanguage(lng, function (err, t) {
        updateContent();
    });
}
