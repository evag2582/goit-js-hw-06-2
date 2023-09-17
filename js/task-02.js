const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul');

for (let i = 0; i < ingredients.length; i++){
  const li = document.createElement('li');
  const listAdd = li.classList.add('item');
  li.textContent = ingredients[i];
  list.appendChild(li);


}