document.addEventListener('DOMContentLoaded', () => {
    
    let counterValue = 0;

    
    const counterDisplay = document.getElementById('counter-value');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');
    const resetButton = document.getElementById('reset');

    
    function updateCounter() {
        counterDisplay.textContent = counterValue;
    }

    
    function increase() {
        counterValue++;
        updateCounter();
    }

    
    function decrease() {
        counterValue--;
        updateCounter();
    }

  
    function reset() {
        counterValue = 0;
        updateCounter();
    }

    
    increaseButton.addEventListener('click', increase);
    decreaseButton.addEventListener('click', decrease);
    resetButton.addEventListener('click', reset); 

    
    updateCounter();
});
