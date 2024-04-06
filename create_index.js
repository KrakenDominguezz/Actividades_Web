
const body = document.body;

const header = document.createElement('h2');
header.textContent = 'Kraken Alejandro Dominguez Ramirez';
header.classList.add('profile-header');

const intro = document.createElement('p');
intro.textContent = 'I am a computer science student interested in frontend technologies and UX/UI Design';
intro.classList.add('profile-intro');

const skillsHeading = document.createElement('h2');
skillsHeading.textContent = 'Skills';
skillsHeading.classList.add('section-heading')

const skillsList = document.createElement('ul');
skillsList.classList.add('skills-list')
const skills = ['Figma', 'HTML', 'CSS','JS','REACT','NEXT JS', ];
skills.forEach(skill => {
  const skillItem = document.createElement('li');
  skillItem.textContent = skill;
  skillsList.appendChild(skillItem);
});

const socialMediaHeading = document.createElement('h2');
socialMediaHeading.textContent = 'Social Media';
socialMediaHeading.classList.add('section-heading')

const socialMediaList = document.createElement('ul');
socialMediaList.classList.add('social-media-list')

const githubLink = document.createElement('a');
githubLink.textContent = 'GitHub';
githubLink.href = 'https://github.com/KrakenDominguezz'; 
const githubItem = document.createElement('li');
githubItem.appendChild(githubLink);
socialMediaList.appendChild(githubItem);


const linkedinLink = document.createElement('a');
linkedinLink.textContent = 'LinkedIn';
linkedinLink.href = 'https://www.linkedin.com/in/kraken-d-6110798b/'; 
const linkedinItem = document.createElement('li');
linkedinItem.appendChild(linkedinLink);
socialMediaList.appendChild(linkedinItem);


// Append elements to the body
body.appendChild(header);
body.appendChild(intro);
body.appendChild(skillsHeading);
body.appendChild(skillsList);
body.appendChild(socialMediaHeading);
body.appendChild(socialMediaList);
