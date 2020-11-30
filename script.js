const projects = [
    {
      name: "Breakout Game",
      github: "https://github.com/MuhammadTalha123/Breakout-game",
      path: "https://muhammadtalha123.github.io/Breakout-game/"
    },
  
    {
        name: "New Year Countdown",
        github: "https://github.com/MuhammadTalha123/Nea-Year-Countdown",
        path: "https://muhammadtalha123.github.io/Nea-Year-Countdown/"
    },
    {
        name: "Rlaxer",
        github: "https://github.com/MuhammadTalha123/Rlaxer",
        path:  "https://muhammadtalha123.github.io/Rlaxer/"
    },
    {
      name: "Sportable-list",
      github: "https://github.com/MuhammadTalha123/Sportable-list",
      path:  "https://muhammadtalha123.github.io/Sportable-list/"
  },
  {
      name: "Speach-text-reader",
      github: "https://github.com/MuhammadTalha123/Speach-text-reader",
      path:  "https://muhammadtalha123.github.io/Speach-text-reader/"
  },
  {
      name: "Speak-number-gussing",
      github: "https://github.com/MuhammadTalha123/Speak-number-gussing",
      path:  "https://muhammadtalha123.github.io/Speak-number-gussing/"
  },
  {
      name: "Typing-Game",
      github: "https://github.com/MuhammadTalha123/Typing-Game",
      path:  "https://muhammadtalha123.github.io/Typing-Game/"
  },
  {
      name: "Music-Player",
      github: "https://github.com/MuhammadTalha123/Music-Player",
      path:  "https://muhammadtalha123.github.io/Music-Player/"
  },
  {
      name: "Movie-seat-booking",
      github: "https://github.com/MuhammadTalha123/Movie-seat-booking",
      path:  "https://muhammadtalha123.github.io/Movie-seat-booking/"
  },
  {
      name: "Model-Menu-Slider",
      github: "https://github.com/MuhammadTalha123/Model-Menu-Slider",
      path:  "https://muhammadtalha123.github.io/Model-Menu-Slider/"
  },
  {
      name: "Memory-card",
      github: "https://github.com/MuhammadTalha123/Memory-card",
      path:  "https://muhammadtalha123.github.io/Memory-card/"
  },
  {
      name: "Meal-Finder",
      github: "https://github.com/MuhammadTalha123/Meal-Finder",
      path:  "https://muhammadtalha123.github.io/Meal-Finder/"
  },
  {
      name: "Lyrics-search",
      github: "https://github.com/MuhammadTalha123/Lyrics-search",
      path:  "https://muhammadtalha123.github.io/Lyrics-search/"
  },
  {
      name: "Infinite-Scroll-Blog",
      github: "https://github.com/MuhammadTalha123/Infinite-Scroll-Blog",
      path:  "https://muhammadtalha123.github.io/Infinite-Scroll-Blog/"
  },
  {
      name: "Hangman-Game",
      github: "https://github.com/MuhammadTalha123/Hangman-Game",
      path:  "https://muhammadtalha123.github.io/Hangman-Game/"
  },
  {
      name: "Form-Validator",
      github: "https://github.com/MuhammadTalha123/Form-Validator",
      path:  "https://muhammadtalha123.github.io/Form-Validator/"
  },
  {
      name: "Expense-Tracker",
      github: "https://github.com/MuhammadTalha123/Expense-Tracker",
      path:  "https://muhammadtalha123.github.io/Expense-Tracker/"
  },
  {
      name: "Exchange-Rate-Calculator",
      github: "https://github.com/MuhammadTalha123/Exchange-Rate-Calculator",
      path:  "https://muhammadtalha123.github.io/Exchange-Rate-Calculator/"
  },
  {
      name: "Dom-Array-Mrthods",
      github: "https://github.com/MuhammadTalha123/Dom-Array-Mrthods",
      path:  "https://muhammadtalha123.github.io/Dom-Array-Mrthods/"
  },
  {
      name: "Custom-Vedio-Player",
      github: "https://github.com/MuhammadTalha123/Custom-Vedio-Player",
      path:  "https://muhammadtalha123.github.io/Custom-Vedio-Player/"
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