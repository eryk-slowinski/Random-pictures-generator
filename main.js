const image = document.querySelector('.image');
const button = document.querySelector('.generate-pic');

const drawImage = () => {
    if (button.style.opacity !== '0') {
        const draw = Math.floor(Math.random() * 10000);
        image.src = `https://picsum.photos/800?random=${draw}`;
    }
}

const growPic = () => {
    image.classList.add('bigger-image');
    button.style.opacity = '0';
}

const resizePic = () => {
    const clickOutside = !event.target.closest('img');
    if (clickOutside) {
        image.classList.remove('bigger-image');
        button.style.opacity = '1';
    }
}

button.addEventListener('click', drawImage);
image.addEventListener('click', growPic);
window.addEventListener('click', resizePic);