// SKILL BUTTONS //
const vscIcon = document.getElementById("vscIcon");
const html5Icon = document.getElementById("html5Icon");
const css3Icon = document.getElementById("css3Icon");
const javaScriptIcon = document.getElementById("javaScriptIcon");
const typeScriptIcon = document.getElementById("typeScriptIcon");
const nodejsIcon = document.getElementById("nodejsIcon");
const gitIcon = document.getElementById("gitIcon");
const postgreSQLIcon = document.getElementById("postgreSQLIcon");
const expressIcon = document.getElementById("expressIcon");
const reactIcon = document.getElementById("reactIcon");
const bootStrapIcon = document.getElementById("bootStrapIcon");
const tailwindIcon = document.getElementById("tailwindIcon");
const trelloIcon = document.getElementById("trelloIcon");
const mTeamsIcon = document.getElementById("mTeamsIcon");
const mExcelIcon = document.getElementById("mExcelIcon");
const gSheetsIcon = document.getElementById("gSheetsIcon");
const mPointIcon = document.getElementById("mPointIcon");
const mWordIcon = document.getElementById("mWordIcon");
const abletonIcon = document.getElementById("abletonIcon");
const adobePrIcon = document.getElementById("adobePrIcon");
const adobeAEIcon = document.getElementById("adobeAEIcon");

const skillInfo = document.getElementById("skillInfo");

// SKILL INFORMATION //
vscIcon.addEventListener("click", e => showSkillInfo("<b>VS Code</b>", "Source-code editor optimized for building & debugging modern web/cloud apps."));
html5Icon.addEventListener("click", e => showSkillInfo("<b>HTML 5</b>", "Markup language for structuring/presenting Web Content"));
css3Icon.addEventListener("click", e => showSkillInfo("<b>CSS 3</b>", "Style sheet language used for describing HTML presentation"));
javaScriptIcon.addEventListener("click", e => showSkillInfo("<b>JavaScript ES8</b>", "Scripting language allows for complex/dynamic features on web pages"));
typeScriptIcon.addEventListener("click", e => showSkillInfo("<b>TypeScript 4</b>", "Superset of JS that offers efficient development through type system"));
nodejsIcon.addEventListener("click", e => showSkillInfo("<b>Node.js</b>", "Back-end runtime environment that executes JS outside of a web browser"));
gitIcon.addEventListener("click", e => showSkillInfo("<b>Git</b>", "Version control system used to collaborate in distributed, non-linear workflows"));
postgreSQLIcon.addEventListener("click", e => showSkillInfo("<b>PostgreSQL</b>", "Object-relational database management system that uses and extends SQL"));
expressIcon.addEventListener("click", e => showSkillInfo("<b>Express</b>", "Fast & minimalist back-end web application/server framework for Node.js"));
reactIcon.addEventListener("click", e => showSkillInfo("<b>React</b>", "JS library used for building user interfaces in single-page or mobile apps"));
bootStrapIcon.addEventListener("click", e => showSkillInfo("<b>BootStrap 5</b>", "Popular framework for building responsive, mobile-first sites"));
tailwindIcon.addEventListener("click", e => showSkillInfo("<b>Tailwind CSS</b>", "Utility-first CSS framework for building any design directly in your markup"));
trelloIcon.addEventListener("click", e => showSkillInfo("<b>Trello</b>", "Visual platform for organizing teams and projects in Agile's Kanban-methodology"));
mTeamsIcon.addEventListener("click", e => showSkillInfo("<b>Teams</b>", "Microsoft's collaboration app, allowing for communication/file sharing in remote teams"));
mExcelIcon.addEventListener("click", e => showSkillInfo("<b>Excel</b>", "Spreadsheet program for data analysis, documentation and visualization"));
gSheetsIcon.addEventListener("click", e => showSkillInfo("<b>Sheets</b>", "Cloud-based spreadsheet app that allows data to be linked between sheets/teams"));
mPointIcon.addEventListener("click", e => showSkillInfo("<b>PowerPoint</b>", "Presentation program designed to facilitate multimedia-rich demonstrations"));
mWordIcon.addEventListener("click", e => showSkillInfo("<b>Word</b>", "Word-processor software used to make professional-quality docs, letters, reports, etc."));
abletonIcon.addEventListener("click", e => showSkillInfo("<b>Ableton LIVE 10</b>", "Fast & fluid DAW designed for creation and live performance"));
adobePrIcon.addEventListener("click", e => showSkillInfo("<b>Premier</b>", "Timeline-based video editing software integrated into Adobe's Creative Suite"));
adobeAEIcon.addEventListener("click", e => showSkillInfo("<b>After Effects</b>", "Adobe's industry standard tool for motion graphics and visual effects"));


function showSkillInfo(title, info) {
    while (skillInfo.firstChild) {
        skillInfo.removeChild(skillInfo.firstChild)
    }

    console.log(title, info);
    let sectionLine = document.createElement("hr");
    let content = document.createElement("p");

    content.innerHTML = `${title} - ${info}`;
    console.log(content);

    skillInfo.appendChild(content);
    skillInfo.appendChild(sectionLine);
}

function test (title, info) {
    console.log(title, info);
}