
let habilidades = {
    desarrollo:
    {
        bg: '#333',
        skills: [
            { n: 'html5', p: '75', c: '#ed7632' },
            { n: 'css', p: '60', c: '#ebbf21' },
            { n: 'js', p: '75', c: '#27a7ce' },
            { n: 'python', p: '60', c: '#f8cc47' },
            { n: 'php', p: '70', c: '#677cb2' },
            { n: 'sql', p: '65', c: '#cb6300' },
            { n: 'node', p: '55', c: '#7fc728' },
            { n: 'laravel', p: '65', c: '#ed615c' },
            { n: 'git', p: '68', c: '#e94f32' }
        ]
    },

    testing:
    {
        bg: '#017401',
        skills: [
            { n: 'analisis', p: '75', c: '#ed7632' },
            { n: 'diseño TC', p: '60', c: '#ebbf21' },
            { n: 'ejecución TC', p: '75', c: '#27a7ce' },
            { n: 'reporte bug', p: '60', c: '#f8cc47' },
            { n: 'bug traking', p: '70', c: '#677cb2' },
            { n: 'scrum', p: '65', c: '#cb6300' },
        ]
    },
    automation:
    {
        bg: 'blue',
        skills: [
            { n: 'java', p: '75', c: '#ed7632' },
            { n: 'maven', p: '60', c: '#ebbf21' },
            { n: 'js', p: '75', c: '#27a7ce' },
            { n: 'selenium', p: '60', c: '#f8cc47' },
            { n: 'JUnit', p: '70', c: '#677cb2' },
            { n: 'apache poi', p: '65', c: '#cb6300' },
            { n: 'js', p: '55', c: '#7fc728' },
            { n: 'cypress', p: '65', c: '#ed615c' },
            { n: 'git', p: '68', c: '#e94f32' }
        ]
    }
}

let hDesarrollo = document.getElementById('habilidades-desarrollo');
let hTesting = document.getElementById('habilidades-testing');
let hAutomation = document.getElementById('habilidades-automation');

let desarrollo = document.querySelector('.desarrollo');
let testing = document.querySelector('.testing');
let automation = document.querySelector('.automation');

let percentDesarrollo = document.querySelector('.desarrollo .progress>.percent');


// console.log(hDesarrollo);
// console.log(hTesting);
// console.log(hAutomation);

function addSkill(skill, area) {
    area.appendChild(skill);
}

function settingProgress(tProgress, tSkill, tPercent, skill) {
    let n = skill.n;
    let p = skill.p;
    let c = skill.c;
    let pg = skill.p * 1.8;
    tProgress.style.transform = "rotate(" + pg + "deg)";
    tProgress.style.background = "linear-gradient(0deg, "+ c +" 50%,rgba(255,255,255,.2)50%)";

    tPercent.style.transform = "scale(1.1) rotate(-" + pg + "deg)";
    tSkill.style.transform = "rotate(-" + pg + "deg)";
    tSkill.textContent = n;
    tSkill.style.color = c;
    if (n.length > 7) {
        tSkill.style.fontSize = "1.4vw";
    } else {
        tSkill.style.fontSize = "2.4vw";
    }
    tPercent.textContent = p;
    tPercent.style.color = c;
}

function createSkills(tProgress, tSkill, tPercent, areaSkills) {
    areaSkills.forEach(skill => {
        settingProgress(tProgress, tSkill, tPercent, skill);
        let newSkill = document.importNode(t.content, true);

        addSkill(newSkill, area);
    });
}

function newSkills(t, area, areaSkills, bg) {
    let nombreArea = "."+bg.className.split(' ')[1];
    console.log(nombreArea);
    let contArea = document.querySelector(nombreArea);
   
    let tProgress = t.content.querySelector('.progress');
    let tSkill = t.content.querySelector('.skill');
    
    let tPercent = t.content.querySelector('.percent');
    let skills = areaSkills.skills;
    
    let c = areaSkills.bg;
    tSkill.style.backgroundColor=c;
    contArea.style.backgroundColor=c;
    console.log(c);
    tPercent.style.background = "linear-gradient(0deg, "+ c +" 50%,transparent 50%)";
    skills.forEach(skill => {
        settingProgress(tProgress, tSkill, tPercent, skill);
        let newSkill = document.importNode(t.content, true);

        addSkill(newSkill, area);
    });
}


if ('content' in document.createElement('template')) {
    //
    let t = document.querySelector('#circular-progress');

    newSkills(t, hDesarrollo, habilidades.desarrollo, desarrollo);
    newSkills(t, hTesting, habilidades.testing, testing);
    newSkills(t, hAutomation, habilidades.automation, automation);

} else {
    alert('Falla por acá');
}