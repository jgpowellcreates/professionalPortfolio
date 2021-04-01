// SKILL BUTTONS //
const html5Icon = document.getElementById("html5Icon");
const css3Icon = document.getElementById("css3Icon");
const javaScriptIcon = document.getElementById("javaScriptIcon");
const bootStrapIcon = document.getElementById("bootStrapIcon");
const codeWarsIcon = document.getElementById("codeWarsIcon");
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
html5Icon.addEventListener("click", e => showSkillInfo("<b>HTML 5</b>", "Markup language for structuring/presenting Web Content"));
css3Icon.addEventListener("click", e => showSkillInfo("<b>CSS 3</b>", "Style sheet language used for describing HTML presentation"));
javaScriptIcon.addEventListener("click", e => showSkillInfo("<b>JavaScript ES8</b>", "Scripting language allows for complex/dynamic features on web pages"));
bootStrapIcon.addEventListener("click", e => showSkillInfo("<b>BootStrap 5</b>", "Popular framework for building responsive, mobile-first sites"));
codeWarsIcon.addEventListener("click", e => showSkillInfo("<b>CodeWars</b>", "Platform for developers to achieve code mastery through programming challenges"));
mTeamsIcon.addEventListener("click", e => showSkillInfo("<b>Teams</b>", "Microsoft's collaboration app, allowing for communication/file sharing in remote teams"));
mExcelIcon.addEventListener("click", e => showSkillInfo("<b>Excel</b>", "Spreadsheet program for data analysis, documentation and visualization"));
gSheetsIcon.addEventListener("click", e => showSkillInfo("<b>Sheets</b>", "Cloud-based spreadsheet application that allows data to be linked between sheets/teams"));
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