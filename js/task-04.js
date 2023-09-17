const decre = document.querySelector('button[data-action="decrement"]');
const incre = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const handleClickDecre = () => {
        counterValue = counterValue - 1;
        document.getElementById('value').textContent = counterValue;
        console.log(`Resto Uno`);
};

decre.addEventListener("click", handleClickDecre);

const handleClickIncre = () => {
    counterValue = counterValue + 1;
    document.getElementById('value').textContent = counterValue;
  console.log("Sumo Uno");
};

incre.addEventListener("click", handleClickIncre);