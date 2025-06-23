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
    title.textContent = `${username} on the cob`
}

if (!localStorage.getItem("name"))
{
    setUsername();
}
else
{
    const storedName = localStorage.getItem("name");

    title.textContent = `${storedName} loves corn`
}

changeUserButton.addEventListener("click", () => 
{
    setUsername();
});

changeUserButton.addEventListener("mouseover", () =>
{
    changeUserButton.style.background = "#FEDE1C";
    
});

changeUserButton.addEventListener("mouseleave", () =>
{
    changeUserButton.style.background = "#99C55E";
});