// TECH STACKS

let tech_stacks = [
    {
        "teck_name": "Linux",
        "img_link": "./Images/linux1.png"
    },
    {
        "teck_name": "Shell Scripting",
        "img_link": "./Images/shell Scripting.png"
    },
    {
        "teck_name": "MySQL",
        "img_link": "./Images/mysql.png"
    },
    {
        "teck_name": "JavaScript",
        "img_link": "./Images/javascript.png"
    },
    {
        "teck_name": "CSS",
        "img_link": "./Images/css.png"
    },
    {
        "teck_name": "HTML",
        "img_link": "./Images/html.png"
    },
    {
        "teck_name": "GitHub",
        "img_link": "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    },
    {
        "teck_name": "VS code",
        "img_link": "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"
    },
    {
        "teck_name": "Reveal.js",
        "img_link": "https://d4.alternativeto.net/Vn2obsd-jGESKmORvmaLfjUrAS6iCUKUEolVz0dFals/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy9yZXZlYWwtanNfMjA2MjEyLnBuZw.png"
    }

]

let techStackDiv = document.getElementById("tech");

tech_stacks.forEach(tech => {


    let comp = document.createElement("div");

    let img = document.createElement("img");
    img.src = tech.img_link;
    img.alt = tech.teck_name;
    let name = document.createElement("p");
    name.innerText = tech.teck_name;

    comp.append(img, name);

    techStackDiv.append(comp);
})



let custstackdiv = document.getElementById("customer")


let softdiv = document.getElementById("soft")

let customer_stacks = [
    {
        "teck_name": "Active Listening",
        "img_link": "./Images/css/ActiveListening.png"
      
    },
    {
        "teck_name": "Adaptibility",
        "img_link": "./Images/css/Adaptibility.png"
    },
    {
        "teck_name": "Problem solving",
        "img_link": "./Images/css/problem solving.png"
    },
    {
        "teck_name": "Technical Assistance",
        "img_link": "./Images/css/Technical assistance.png"
    }
  
  ]
  
  customer_stacks.map(tech => {
  
  
    let comp = document.createElement("div");
  
    let img = document.createElement("img");
    img.src = tech.img_link;
    img.alt = tech.teck_name;
    img.className = "pic"
    let name = document.createElement("p");
    name.innerText = tech.teck_name;
    name.className= "naav"
  
    comp.append(img, name);
  
    custstackdiv.append(comp);
  })
  
  let soft_stacks = [
    {
        "teck_name": "Time Management",
        "img_link": "./Images/softS/time management.png"
      
    },
    {
        "teck_name": "Team Building",
        "img_link": "./Images/softS/team building.png"
    },
    {
        "teck_name": "Decision Making",
        "img_link": "./Images/softS/decision making.png"
    },
    {
        "teck_name": "Critical Thinking",
        "img_link": "./Images/softS/critical thinking.png"
    }
  
  ]
  
  soft_stacks.map(tech => {
  
  
    let comp = document.createElement("div");
  
    let img = document.createElement("img");
    img.src = tech.img_link;
    img.alt = tech.teck_name;
    img.className = "pic"
    let name = document.createElement("p");
    name.innerText = tech.teck_name;
    name.className= "naav"
  
    comp.append(img, name);
  
    softdiv.append(comp);
  })


let project_details = [
    {
        "project_name": "Gitlab Onboarding",
        "details": "This was a collaborative project developed within 2 days, with a team of 2 members. I worked on Coding for building slides.",
        "tech_stack": "Reveal.js, github",
        "data_base": "Rveal.js",
        "banner": "Images/GITLAB.png",
        "deployed": "https://timely-palmier-635908.netlify.app",
        "gitlink": "https://github.com/Jay1631/Gitlab-customer-onbording"
    },

    {
        "project_name": "Pharmeasy.in Clone",
        "details": "The project was a individual project done within 5 days.",
        "tech_stack": "HTML, CSS, JavaScript, github",
        "data_base": "Local Storaage",
        "banner": "Images/Pharmeasy.png",
        "deployed": "https://handsome-ball-4549.netlify.app/index.html",
        "gitlink": "https://github.com/Jay1631/handsome-ball-4549"
    },

    {
        "project_name": "JEFIT.com Clone",
        "details": "A collaborative project completed within 5 days with 5 other colleagues. I've built Exercise page with API Integration.",
        "tech_stack": "HTML, CSS, JavaScript, github",
        "data_base": "Json server",
        "banner": "Images/JEFIT.png",
        "deployed": "https://unique-trifle-43289e.netlify.app/",
        "gitlink": "https://github.com/Jay1631/onerous-train-1093"
    },
];


project_details.forEach(project => {

    let Projects_Div = document.getElementById("projects_div");

    let Maindiv = document.createElement("div");
    Maindiv.className = "main"

    let pictureDiv = document.createElement("div");
    pictureDiv.className = "picture";

    let laptopDiv = document.createElement("div");
    let screenDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = project.banner;
    screenDiv.append(img);
    laptopDiv.append(screenDiv);
    let base = document.createElement("div");
    let lower_base = document.createElement("div");

    pictureDiv.append(laptopDiv, base, lower_base);

    let descriptionDiv = document.createElement("div");
    descriptionDiv.className = "project_description";

    let nameDiv = document.createElement("div");
    nameDiv.innerText = project.project_name;
    let projectDetails = document.createElement("div");
    projectDetails.innerHTML = `<p>${project.details}</p><p>Tech Stack : ${project.tech_stack}</p><p>Database : ${project.data_base}</p>`;
    let buttonsDiv = document.createElement("div");
    let deployedBtn = document.createElement("button");
    deployedBtn.innerText = "Live";

    deployedBtn.onclick = () => {
        window.open(project.deployed, "_blank");
    }

    let gitBtn = document.createElement("button");
    gitBtn.innerText = "GitHub";
    gitBtn.onclick = () => {
        window.open(project.gitlink, "_blank");
    }

    buttonsDiv.append(deployedBtn, gitBtn);
    descriptionDiv.append(nameDiv, projectDetails, buttonsDiv);

    Maindiv.append(pictureDiv, descriptionDiv);
    Projects_Div.append(Maindiv);
});


function lucky(){
    let x= document.getElementById("content");
    if(x.style.display==="none"){
        x.style.display="block";
    } else{
        x.style.display="none";
    }
}