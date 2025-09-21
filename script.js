document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('demoForm');
const output = document.getElementById('demoOutput');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value;
  const skills = document.getElementById('skills').value.split(',');
  
  let suggestion = "Based on your skills, Aura suggests exploring ";
  if (skills.includes("Python")) suggestion += "Data Science or AI Engineering.";
  else if (skills.includes("Design")) suggestion += "UX/UI Design or Product Design.";
  else if (skills.includes("Marketing")) suggestion += "Digital Marketing or Brand Strategy.";
  else suggestion += "various career paths like Software Development, Business Analysis, or Creative Design.";

  output.innerHTML = <p><strong>Hi ${name}!</strong> ${suggestion}</p>;
});