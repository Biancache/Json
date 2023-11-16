fetch('data.json')
    .then(response => response.json())
    .then(projects => {
        console.log(projects);
        const projectsContainer = document.getElementById('projects-container');
        projects.forEach(project => {
            console.log(project);
            const projectDiv = document.createElement('div');
            projectDiv.className = 'data';
            projectDiv.innerHTML = `
                <img src="${project.image}" alt="${project.title}" onclick="popImg(this)">
                <h2>${project.title}</h2>
                <p>${project.describe}</p>
            `;
            projectsContainer.appendChild(projectDiv);
        });
    })
    .catch(error => {
        console.error('Error loading project data:', error);
    });

function popImg(dom) {
    new Fancybox(
        // Array containing gallery items
        [
            // Gallery item
            {
                src: dom.src,
                thumb: dom.src,
            },
        ],
        // Gallery options
        {
            hideScrollbar: false,
        }
    );
}