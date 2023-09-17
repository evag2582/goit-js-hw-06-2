const list = document.querySelectorAll('li.item');
console.log(`Number of categories: ${list.length}`)

list.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
});