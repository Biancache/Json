fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        const projectsContainer = document.getElementById('projects-container');
        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'data';
            projectDiv.innerHTML = `
                <img src="${Miami.JPG}" alt="${project.title}">
                <h2>${project.title}</h2>
            `;
            projectsContainer.appendChild(projectDiv);
        });
    })
    .catch(error => {
        console.error('Error loading project data:', error);
    });
