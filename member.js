function skillsMember() {
  const member = document.getElementById('member');
  const memberSkills = document.getElementById('member-skills');
  const memberSkillsList = document.getElementById('member-skills-list');

  member.addEventListener('click', () => {
    memberSkills.classList.toggle('member-skills--active');
    memberSkillsList.classList.toggle('member-skills-list--active');
  });
}