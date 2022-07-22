async function main() {
    let string = "https://api.nasa.gov/planetary/apod?api_key=s3kXE6tAfQArUhh3k1yrcmPf3Hn4cQBXf8mFlTrH";
    updateData(string);
    let button = document.querySelector("#btn");
    button.addEventListener("click", async () => {
        let date = document.querySelector("#date").value;

        await updateData(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=s3kXE6tAfQArUhh3k1yrcmPf3Hn4cQBXf8mFlTrH`)
    });
}

async function getData(url) {
    let data = await fetch(url);
    let details = await data.json();
    return details;
}

async function updateData(url) {
    let result = await getData(url);
    retrieveData(result);
}

function retrieveData(result) {
    let div = document.querySelector("#nasa");
    let media = result.media_type == "image" ? `<img src="${result.url}" alt="image" />` : `<iframe width="560" height="315" src="${result.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    div.innerHTML = "";
    let content = `<h1>${result.title}</h1>
                    ${media}
                    <p>${result.explanation}</p`
    div.insertAdjacentHTML("beforeend", content)

}


main();
