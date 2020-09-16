const toggleTeamImg = () => {
    let storage;
    const teamBlock = document.getElementById('command');

    teamBlock.addEventListener('mouseover', (event) => {
        let target = event.target;
        if (target.matches('.command__photo')) {
            storage = target.src;
            target.src = target.dataset.img;
        }
    });
    teamBlock.addEventListener('mouseout', (event) => {
        let target = event.target;

        if (target.matches('.command__photo')) {
            target.src = storage;
            storage = '';
        }
    });

};

export default toggleTeamImg;