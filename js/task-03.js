const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listImg = document.querySelector('ul');

listImg.style.display = "flex";
listImg.style.textAlign = "center";
listImg.style.width = "1200px";
listImg.style.justifyContent = "space-between";


for (let i = 0; i < images.length; i++){
  const li = document.createElement('li');
  const listAdd = li.classList.add('item');
  const img = document.createElement('img');
  img.setAttribute('src', images[i]['url'])
  img.setAttribute('alt', images[i]['alt'])
  img.style.width = '280px';
  listImg.appendChild(li);
  listImg.appendChild(img);
}