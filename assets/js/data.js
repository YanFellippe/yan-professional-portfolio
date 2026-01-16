// --- DATA OBJECTS ---
const techStack = {
    languages: [
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'Java', icon: 'devicon-java-plain colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'PHP', icon: 'devicon-php-plain colored' },
        { name: 'Go', icon: 'devicon-go-original-wordmark colored' },
        { name: 'C', icon: 'devicon-c-plain colored' },
        { name: 'C#', icon: 'devicon-csharp-plain colored' },
        { name: 'Dart', icon: 'devicon-dart-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'Ruby', icon: 'devicon-ruby-plain colored' }
    ],
    frameworks: [
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Tailwind', icon: 'devicon-tailwindcss-original colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
        { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
        { name: 'Express', icon: 'devicon-express-original' },
        { name: 'Unity', icon: 'devicon-unity-original colored' },
        { name: 'Jest', icon: 'devicon-jest-plain colored' }
    ],
    databases: [
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
        { name: 'SQLite', icon: 'devicon-sqlite-plain colored' }
    ],
    tools: [
        { name: 'Docker', icon: 'devicon-docker-plain colored' },
        { name: 'AWS', icon: 'devicon-amazonwebservices-original-wordmark colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'Linux', icon: 'devicon-linux-plain' },
        { name: 'Windows', icon: 'devicon-windows8-original colored' },
        { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
        { name: 'Android Studio', icon: 'devicon-androidstudio-plain colored' },
        { name: 'Eclipse', icon: 'devicon-eclipse-plain colored' },
        { name: 'IntelliJ', icon: 'devicon-intellij-plain colored' },
        { name: 'Figma', icon: 'devicon-figma-plain colored' },
        { name: 'Notion', icon: 'devicon-notion-plain' }
    ],
    others: [
        { name: 'WordPress', icon: 'devicon-wordpress-plain colored' },
        { name: 'Arduino', icon: 'devicon-arduino-plain colored' },
        { name: 'npm', icon: 'devicon-npm-original-wordmark colored' },
        { name: 'LinkedIn', icon: 'devicon-linkedin-plain colored' }
    ]
};

const projects = [
    {
        name: "Marvel Game Layout",
        desc: "Layout de jogo de luta retrô inspirado nos personagens da Marvel com design nostálgico e interativo.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/marvel-game-layout",
        viewLink: "https://YanFellippe.github.io/marvel-game-layout"
    },
    {
        name: "Automação de Ações JAVA",
        desc: "Sistema de automações de ações Java desenvolvido para hackathon, com testes em Gherkin e interface web.",
        techs: ["JavaScript", "Java", "Gherkin", "CSS3", "HTML5"],
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/automocao-de-acoes-JAVA",
        viewLink: "https://YanFellippe.github.io/automocao-de-acoes-JAVA"
    },
    {
        name: "Pokemon Slider",
        desc: "Slider interativo de cartas Pokémon com animações suaves e design responsivo.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/project-pokemon-slider",
        viewLink: "https://YanFellippe.github.io/project-pokemon-slider"
    },
    {
        name: "Espace Cream",
        desc: "Landing page moderna e elegante para sorveteria com design desktop responsivo e atraente.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/espace-cream-desktop",
        viewLink: "https://YanFellippe.github.io/espace-cream-desktop"
    },
    {
        name: "Shop de Quebrada",
        desc: "Site para shopping de moda street com design urbano e identidade visual marcante.",
        techs: ["HTML5", "CSS3"],
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/shop-de-quebrada",
        viewLink: "https://YanFellippe.github.io/shop-de-quebrada"
    },
    {
        name: "Web Food",
        desc: "Site completo para lanchonete com cardápio digital, pedidos online e interface intuitiva.",
        techs: ["HTML5", "CSS3"],
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/web-food",
        viewLink: "https://YanFellippe.github.io/web-food"
    },
    {
        name: "Simple Todo List",
        desc: "Aplicação web para lista simples de afazeres com backend em Python e interface responsiva.",
        techs: ["HTML5", "CSS3", "JavaScript", "Python"],
        img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/simple-todo-list",
        viewLink: "https://YanFellippe.github.io/simple-todo-list"
    },
    {
        name: "Simple Calculator",
        desc: "Calculadora padrão matemática com interface limpa e funcionalidades básicas de cálculo.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/simple-calculator",
        viewLink: "https://YanFellippe.github.io/simple-calculator"
    },
    {
        name: "Java Supermarket System",
        desc: "Sistema completo de supermercado desenvolvido com Java e NetBeans para gerenciamento de vendas e estoque.",
        techs: ["Java"],
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/java-supermarket-system",
        viewLink: "#"
    },
    {
        name: "CRUD System",
        desc: "Sistema CRUD completo para gerenciamento de cadastros desenvolvido com Java e NetBeans.",
        techs: ["Java"],
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/CRUD-SYSTEM",
        viewLink: "#"
    },
    {
        name: "Bagunça Mobile",
        desc: "Versão mobile do site Bagunça transformada em aplicativo Android desenvolvido em Java.",
        techs: ["Java"],
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/BAGUNCA-MOBILE-VERSION",
        viewLink: "#"
    },
    {
        name: "Simple Stock System",
        desc: "Sistema de estoque para empresa com interface web e integração com banco de dados PostgreSQL.",
        techs: ["HTML5", "CSS3", "JavaScript", "PostgreSQL"],
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/simple-stock-system",
        viewLink: "https://YanFellippe.github.io/simple-stock-system"
    },
    {
        name: "The Last of Us Interface",
        desc: "Interface de apresentação da série The Last of Us com design imersivo e elementos visuais impactantes.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        img: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/the-last-of-us-interface",
        viewLink: "https://YanFellippe.github.io/the-last-of-us-interface"
    },
    {
        name: "Music Player",
        desc: "Player de música completo com controles de reprodução, playlist e design moderno.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/music-player",
        viewLink: "https://YanFellippe.github.io/music-player"
    },
    {
        name: "Clone Apple Watch",
        desc: "Página clone do produto Apple Watch com design fiel à marca e apresentação de recursos.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        img: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/clone-apple-watch",
        viewLink: "https://YanFellippe.github.io/clone-apple-watch"
    },
    {
        name: "XGame Studio",
        desc: "Site voltado a falar sobre games com reviews, notícias e conteúdo gamer interativo.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/xgame-studio",
        viewLink: "https://YanFellippe.github.io/xgame-studio"
    },
    {
        name: "2048 Game",
        desc: "Jogo 2048 clássico desenvolvido do zero com lógica de movimentação e sistema de pontuação.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/2048-GAME",
        viewLink: "https://YanFellippe.github.io/2048-GAME"
    },
    {
        name: "Orkut Reimagined",
        desc: "Reimaginação de como o Orkut seria nos dias de hoje, desenvolvido com React e Node.js.",
        techs: ["React", "Node.js", "JavaScript"],
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/orkut-reimagined",
        viewLink: "https://YanFellippe.github.io/orkut-reimagined"
    },
    {
        name: "Healthy Routine",
        desc: "Sistema para gerenciamento de rotina saudável e prevenção de doenças com React e Node.js.",
        techs: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/healthy-routine",
        viewLink: "https://YanFellippe.github.io/healthy-routine"
    },
    {
        name: "Sistema de Consentimento LGPD",
        desc: "Sistema de gerenciamento de consentimento de acordo com a LGPD desenvolvido com Ruby on Rails.",
        techs: ["HTML5", "CSS3", "JavaScript", "Ruby on Rails"],
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/sistema-de-consentimento-lgpd",
        viewLink: "https://YanFellippe.github.io/sistema-de-consentimento-lgpd"
    },
    {
        name: "InHome Landing Page",
        desc: "Landing page profissional para a empresa InHome, prestadora de serviços, com design moderno e conversão otimizada.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=400",
        repoLink: "https://github.com/YanFellippe/inhome-prestadora-de-servicos-landingpage",
        viewLink: "https://YanFellippe.github.io/inhome-prestadora-de-servicos-landingpage"
    }
];

