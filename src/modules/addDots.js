const addDots = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
    portfolioDots = document.querySelector('.portfolio-dots');

    slide.forEach(() => {
        const newDot = document.createElement("li");
        newDot.classList.add("dot");
        portfolioDots.appendChild(newDot);
      });
    
    portfolioDots.children[0].classList.add("dot-active");
};

export default addDots;