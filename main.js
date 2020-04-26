const projects = [
  {
    name: "Breakout Game",
    github: "https://github.com/MuhammadTalha123/Breakout-game",
    path: "./p1/index.html"
  },

  {
      name: "New Year Countdown",
      github: "https://github.com/MuhammadTalha123/Nea-Year-Countdown",
      path: "./p2/index.html"
  },
  {
      name: "Rlaxer",
      github: "https://github.com/MuhammadTalha123/Rlaxer",
      path:  "./p3/index.html"
  },
  {
    name: "Sportable-list",
    github: "https://github.com/MuhammadTalha123/Sportable-list",
    path:  "./p4/index.html"
},
{
    name: "Speach-text-reader",
    github: "https://github.com/MuhammadTalha123/Speach-text-reader",
    path:  "./p5/index.html"
},
{
    name: "Speak-number-gussing",
    github: "https://github.com/MuhammadTalha123/Speak-number-gussing",
    path:  "./p6/index.html"
},
{
    name: "Typing-Game",
    github: "https://github.com/MuhammadTalha123/Typing-Game",
    path:  "./p7/index.html"
},
{
    name: "Music-Player",
    github: "https://github.com/MuhammadTalha123/Music-Player",
    path:  "./p8/index.html"
},
{
    name: "Movie-seat-booking",
    github: "https://github.com/MuhammadTalha123/Movie-seat-booking",
    path:  "./p9/index.html"
},
{
    name: "Model-Menu-Slider",
    github: "https://github.com/MuhammadTalha123/Model-Menu-Slider",
    path:  "./p10/index.html"
},
{
    name: "Memory-card",
    github: "https://github.com/MuhammadTalha123/Memory-card",
    path:  "./p11/index.html"
},
{
    name: "Meal-Finder",
    github: "https://github.com/MuhammadTalha123/Meal-Finder",
    path:  "./p12/index.html"
},
{
    name: "Lyrics-search",
    github: "https://github.com/MuhammadTalha123/Lyrics-search",
    path:  "./p13/index.html"
},
{
    name: "Infinite-Scroll-Blog",
    github: "https://github.com/MuhammadTalha123/Infinite-Scroll-Blog",
    path:  "./p14/index.html"
},
{
    name: "Hangman-Game",
    github: "https://github.com/MuhammadTalha123/Hangman-Game",
    path:  "./p15/index.html"
},
{
    name: "Form-Validator",
    github: "https://github.com/MuhammadTalha123/Form-Validator",
    path:  "./p16/index.html"
},
{
    name: "Expense-Tracker",
    github: "https://github.com/MuhammadTalha123/Expense-Tracker",
    path:  "./p17/index.html"
},
{
    name: "Exchange-Rate-Calculator",
    github: "https://github.com/MuhammadTalha123/Exchange-Rate-Calculator",
    path:  "./p18/index.html"
},
{
    name: "Dom-Array-Mrthods",
    github: "https://github.com/MuhammadTalha123/Dom-Array-Mrthods",
    path:  "./p19/index.html"
},
{
    name: "Custom-Vedio-Player",
    github: "https://github.com/MuhammadTalha123/Custom-Vedio-Player",
    path:  "./p20/index.html"
},
];

const projectContainer = document.getElementsByClassName("projects")[0];

projects.forEach((project) => {
  const newProject = `  <div>
  <h1>${project.name}</h1>
  <a href="${project.github}" target="_blank">
    <button class="generalBtn">View Project On GitHub</button>
  </a>
  <iframe src="${project.path}" frameborder="0"></iframe>
  </div>
  </div> 
  `;
  projectContainer.innerHTML += newProject;
});