const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
        popUpBtn = document.querySelectorAll('.popup-btn');
    
    popUpBtn.forEach((element) => {
        element.addEventListener('click', () => { 
               
            popUp.style.display = 'block'; 
            let width = document.documentElement.clientWidth;              

            if (width > 768) {
                popUp.style.opacity = '0%';           
                    
                let opacityCounter = 0;
                let duration = 1000;
                
                const animatePopUp = () => {                   
                    
                    let start = performance.now();

                    const draw = () => {
                        opacityCounter += 10;
                        popUp.style.opacity = opacityCounter + '%';
                    };

                    let requestId = requestAnimationFrame(function animate (time) {
                        let timeFraction = (time - start) / duration;
                        if (timeFraction > 1) timeFraction = 1;

                        let progress = timeFraction;

                        draw(progress);

                        if (timeFraction < 1) {
                            requestAnimationFrame(animate);
                        }
                    });
                
                };
                animatePopUp();
            }              
        });            
    });
    popUp.addEventListener('click', (event) => {
        let target = event.target;

        if (target.matches('.popup-close')) {
            popUp.style.display = 'none';
        } else {

            target = target.closest('.popup-content');
            
            if (!target) {
                popUp.style.display = 'none';
            }
        }
    })
};

export default togglePopUp;