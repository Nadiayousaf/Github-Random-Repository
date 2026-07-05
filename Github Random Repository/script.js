
const languageSelect = document.querySelector("#language");

const repoCard = document.querySelector(".repo-card");

const repoName = document.querySelector(".repo-name");
const repoDescription = document.querySelector(".repo-description");

const repoLanguage = document.querySelector(".repo-language");
const repoStars = document.querySelector(".repo-stars");
const repoForks = document.querySelector(".repo-forks");
const repoIssues = document.querySelector(".repo-issues");

const repoLink = document.querySelector(".repo-link");

const refreshBtn = document.querySelector(".refresh-btn");



console.log("Script Loaded");



console.log(languageSelect);

languageSelect.addEventListener("change", () => {

    const selectedLanguage = languageSelect.value;

    fetchRepository(selectedLanguage);

});

refreshBtn.addEventListener("click", () => {

    fetchRepository(languageSelect.value);

});

async function fetchRepository(language) {

    const url = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);


    const repositories = data.items;

    const randomIndex = Math.floor(Math.random() * repositories.length);

    const randomRepo = repositories[randomIndex];

    repoName.textContent = randomRepo.name;
    repoDescription.textContent = randomRepo.description;
    repoLanguage.innerHTML = `<i class="fa-solid fa-code"></i> ${randomRepo.language}`;

    repoStars.innerHTML = `<i class="fa-solid fa-star"></i> ${randomRepo.stargazers_count}`;

    repoForks.innerHTML = `<i class="fa-solid fa-code-fork"></i> ${randomRepo.forks_count}`;

    repoIssues.innerHTML = `<i class="fa-solid fa-bug"></i> ${randomRepo.open_issues_count}`;
    repoLink.href = randomRepo.html_url;
    repoCard.classList.remove("hidden");

    refreshBtn.classList.remove("hidden");



}


