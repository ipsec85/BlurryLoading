const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

const blurring = () => {
    load++;
    if (load > 99) {
        clearInterval(interval)
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    console.log(load);
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

let interval = setInterval(blurring, 30);

