const $ = document.querySelector.bind(document);

const projectsApi = "https://hieucodeweb-all-projects-default-rtdb.asia-southeast1.firebasedatabase.app/.json";

function start() {
    getProjects(function (projects) {
        renderProjects(projects);
    });
}

start();

function getProjects(callback) {
    fetch(projectsApi)
        .then(function (responsive) {
            return responsive.json();
        })
        .then(callback);
}

function renderProjects(projects) {
    const html = projects
        .map(({ link, img, category, domain } = item) => {
            return `
        <div class="col">
            <div class="card">
                <a href="${link ? link : ""}" class="card__img" target="_blank" rel="noopener">
                    <img src="./assets/img/${img}" alt="" class="card__thumb" />
                </a>
                <div class="card__content">
                    <div class="card__row">
                        <span class="card__cate">${category}</span>
                    </div>
                    <h3 class="card__title"><a href="${link ? link : ""}" target="_blank" rel="noopener">${domain}</a></h3>
                </div>
            </div>
        </div>
    `;
        })
        .join("");
    $("#list-website").innerHTML = html;
}
