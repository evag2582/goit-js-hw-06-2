const control = document.querySelector('input#font-size-control');
console.log

control.addEventListener("input", (e) => {
    const increment = (`${control.value}px`);
    document.querySelector('span#text').style.fontSize = increment;
});