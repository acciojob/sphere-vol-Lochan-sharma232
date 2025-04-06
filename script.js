function volume_sphere() {
	let height=parseFloat(document.getElementById("height").value);
	let radius=parseFloat(document.getElementById("radius").value);

	let volume=Math.PI*radius**2**height;
	document.getElementById('Calculate').innerHTML=volume;
    //Write your code here
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
