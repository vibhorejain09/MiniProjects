const reviews = [
    {
      id: 1,
      name: "Harsh Parwal",
      job: "Graphic Designer and Video Editor",
      img:
        "./harsh.jpeg",
      text:
        "Currently pursuing Bachelors in Computer Science Technology, SGSITS, Indore.I am a coder, a developer, a musician, a video editor, a singer, a guitarist, a production designer, a content creator, a YouTuber, a student, in short.",
    },
    {
      id: 2,
      name: "Ishita Jain",
      job: "Problem Solver",
      img:
        "./ishita.jpeg",
      text:
        "A passionate programmer, always eager to explore and expand the thinking potentials. Highly interested to step into the world of development and understand how things work in the practical phase.",
    },
    {
      id: 3,
      name: "Mitul Garg",
      job: "Web Developer",
      img:
        "./mitul.jpeg",
      text:
        "Third Year Computer Science Engineering Student having good communication and interpersonal skills with CGPA of 8.09, seeking for internship and currently learning Web Development.",
    },
    {
      id: 4,
      name: "Anshita Jain",
      job: "Graphic Designer",
      img:
        "./anshita.jpeg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "Sayan Chandra",
        job: "Python Programmer",
        img:
          "./sayan.jpeg",
        text:
          "B.Tech Undergrad in Computer Science and Engineering at Shri GS Institute of Technology and Science, Indore, M.P. I am always energetic and eager to learn new skills. I look forward to becoming a valued contributor to this organization.. ",
      },
  
  ];

  let currentItem = 0;
  // select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//loding initial item
window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
})

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });

  //random
randomBtn.addEventListener("click", function(){
    currentItem = generateRandom();
    showPerson(currentItem);
})

function generateRandom() {
    return Math.floor(Math.random()*reviews.length);
}