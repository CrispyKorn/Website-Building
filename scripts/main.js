const cornImage = document.querySelector("img");

cornImage.addEventListener("click", () => 
{
    const imageSource = cornImage.getAttribute("src");

    if (imageSource === "images/corn.png") cornImage.setAttribute("src", "images/cornflip.png");
    else cornImage.setAttribute("src", "images/corn.png");
});

const changeUserButton = document.querySelector("button");
const title = document.querySelector("h1");

function setUsername()
{
    const username = prompt("Please enter your name.");

    if (!username)
    {
        setUsername();
        return;
    }
    
    localStorage.setItem("name", username);
    title.textContent = `${username} on the cob`;
}

if (!localStorage.getItem("name"))
{
    setUsername();
}
else
{
    const storedName = localStorage.getItem("name");

    title.textContent = `${storedName} on the cob`;
}

changeUserButton.addEventListener("click", () => 
{
    setUsername();
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => 
{
    button.addEventListener("mouseover", () => button.style.background = "#FEDE1C");
    button.addEventListener("mouseleave", () => button.style.background = "#99C55E");
});

const showSecretsButton = document.getElementById("secretsButton");
const secretContent = document.getElementById("secretContent");
var secretsHidden = true;

showSecretsButton.addEventListener("click", () => 
{
    secretsHidden = !secretsHidden;

    secretContent.style.height = secretsHidden ? "0" : "auto";
    secretContent.style.visibility = secretsHidden ? "hidden" : "visible";
    showSecretsButton.innerHTML = secretsHidden ? "Show secrets" : "Hide secrets";
});