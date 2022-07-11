export function Main(){
	const $Main = document.createElement("main");
	$Main.id = "main";
	
	if(!location.hash.includes("#/search"))$Main.classList.add("grid-fluid");
	
	return $Main;
}