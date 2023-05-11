const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav'); 
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function(){
    this.classList.toggle('close');
    nav.classList.toggle('reveal-nav');
    menu.classList.toggle('reveal-items');
})


const text = document.querySelector('h1');
const container = document.querySelector('.rounded-text');
const textWidth = text.offsetWidth;
const textHeight = text.offsetHeight;
const radius = Math.max(textWidth, textHeight) / 2;
text.style.clipPath = `circle(${radius}px at center)`;
container.style.width = `${textWidth}px`;
container.style.height = `${textHeight}px`;

let circ = new CircleType(document.getElementById('circ'));
circ.raduis(360);

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})

//  $('.faq').click(function(){
//     alert('hi');

//  });
const text = document.querySelector(".text p");

text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
	)
	.join("");
	 
	const angletoradian = (angle)=>{
		return angle = (Math.PI / 180);
	};
	const radius = 100;
	const diameter = radius*2;
	 
     const circle = document.querySelector()