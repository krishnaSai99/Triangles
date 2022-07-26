const inputs = document.querySelectorAll(".input-angle")
const clickbutton = document.querySelector(".click-button")

const output1 = document.querySelector("#output")

function calculatesum(angle1, angle2, angle3) {
    const sumofangle = angle1 + angle2 + angle3
    return sumofangle
}

function istriangle() {
    const sumofangles = calculatesum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    if (sumofangles === 180) {
        output1.innerText = "Yes it form a triangle";
    } else {
        output1.innerText= "No it is not a traingle";
    }
}



clickbutton.addEventListener("click", istriangle)