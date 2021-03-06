const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        };

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        } else {
            total = 0;
        }
            
        totalValue.textContent = Math.floor(total);
    }

    calcBlock.addEventListener('change', (event) => {
        let target = event.target;
         if (target.matches('.calc-type') || target.matches('.calc-square') ||
            target.matches('.calc-day') || target.matches('.calc-count')) {
                countSum();
        }
    })


    const validateCalcInput = () => {
        const calc = document.getElementById('calc');

        calc.addEventListener('input', (event) => {
            let target = event.target;

            if (target.matches('input')) {
                let validation = /\D/;
                target.value = target.value.replace(validation, '');
            }
        })
    };
    validateCalcInput();
 };

 export default calc;