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