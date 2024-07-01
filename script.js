
const firstPanel = document.querySelector("#first-panel");
const secondPanel = document.querySelector("#second-panel");
const thirdPanel = document.querySelector("#third-panel");
const fourthPanel = document.querySelector("#fourth-panel");

const panels = [firstPanel, secondPanel, thirdPanel, fourthPanel];

let click = 0;

for (const panel of panels) {
    panel.addEventListener("click", () => {
        panelNumber = Math.floor(Math.random() * 12);
        panel.src = "panels/panel" + panelNumber + ".png";
        console.log(panel.src);

        ++click;

        const meow = new Audio("assets/meow.wav");

        if (click % 3 == 0 ){
            meow.play();
        }
    }
    )
}

const musicOff = document.querySelector("#music-off-control");
const musicOn = document.querySelector("#music-on-control");

musicOn.style.display = "none";

const track = new Audio("assets/track.wav");

musicOff.addEventListener("click", () => {
    track.play();
    track.volume = 1;
    track.loop = true;
    musicOff.style.display = "none";
    musicOn.style.display = "block";
});

musicOn.addEventListener("click", () => {
    track.volume = 0;
    musicOff.style.display = "block";
    musicOn.style.display = "none";
});