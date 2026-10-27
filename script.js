
"use strict";

// SHADOW — Interactive Light Experiment

const lightSlider = document.getElementById("light-position");
const lightValue = document.getElementById("light-value");
const experimentScene = document.querySelector(".experiment-scene");
const experimentDescription = document.getElementById("experiment-description");

function updateShadow() {
    const position = Number(lightSlider.value);

    // Move the light horizontally.
    experimentScene.style.setProperty(
        "--light-x",
        `${position}%`
    );

    // The shadow moves in the opposite direction.
    const shadowOffset = (50 - position) * 1.5;

    experimentScene.style.setProperty(
        "--shadow-offset",
        `${shadowOffset}px`
    );

    // Update the displayed value.
    lightValue.textContent = `${position}%`;

    // Describe the result for accessibility.
    let description;

    if (position < 40) {
        description =
            "The light is on the left. The shadow moves to the right.";
    } else if (position > 60) {
        description =
            "The light is on the right. The shadow moves to the left.";
    } else {
        description =
            "The light is near the center. The shadow is close to the object.";
    }

    experimentDescription.textContent = description;
}

if (lightSlider && lightValue && experimentScene && experimentDescription) {
    lightSlider.addEventListener("input", updateShadow);

    // Initialize the experiment.
    updateShadow();
}
