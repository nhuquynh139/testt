let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
	let value = window.scrolly;
	
	text.style.marginTop = value * 2.5 + 'px';
	hill1.style.top = value * 1 + 'px'
	
})
const panels = document.querySelectorAll(".panel");


panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClasses(); 
		panel.classList.add("active");
	});
});

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	})
}