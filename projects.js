let projects = [
     {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
     },
    
     {  
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
     },

     {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
     },

     { 
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
     }
    ];

        const printToDom = (stringToPrint, divId) => {
        const selectedDiv = document.getElementById(divId);
        selectedDiv.innerHTML = stringToPrint;
    };

    const createProjectCards = () => {
        let newString = " ";
        for (let i = 0; i < projects.length; i++ ) {
            if (projects[i].available === true)
            newString+= `<div id="projectsPage">`
            newString+= `<h3>${projects[i].title}<h3>`
            newString+= `<img src="${projects[i].screenshot}"></img>`
            newString+= `<p>${projects[i].description}</p>`
            newString+= `<p>${projects[i].technologiesUsed}</p>`
            newString+= `<a href="https://${projects[i].url}">Link</a>`
            newString+= `<a href="https://${projects[i].githubUrl}">github</a>`
            newString+= `</div>`
            printToDom(newString, "projectsContainer");
        };
    };

    createProjectCards();

    const showBio = () => {
        document.getElementById('bioPage').scrollTo();
        document.getElementById('bioPage').style.display = "block"; 
        document.getElementById('technologiesPage').style.display = "none";
        document.getElementById('projectsPage').style.display = "none";
    }
    const showTech = () => {
        document.getElementById('technologiesPage').scrollTo();
        document.getElementById('technologiesPage').style.display = "block";
        document.getElementById('bioPage').style.display = "none";
        document.getElementById('projectsPage').style.display = "none";
    }
    const showProjects = () => {
        document.getElementById('projectsPage').scrollTo();
        document.getElementById('projectsPage').style.display = "inline";
        document.getElementById('technologiesPage').style.display = "none";
        document.getElementById('bioPage').style.display = "none";
    }

    const registerNavEvents = () => {
        document.getElementById('navToBio').addEventListener('click', showBio);
        document.getElementById('navToTechnologies').addEventListener('click', showTech);
        document.getElementById('navToProjects').addEventListener('click', showProjects);
    }
    registerNavEvents();
