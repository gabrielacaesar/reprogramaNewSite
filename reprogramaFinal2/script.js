var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");

function abrirMenu() {
	var menu = document.querySelector("#navegacaoPrimaria");
	// declarar uma variável, pegar navegacaoPrimaria //


	if(menu.className == "menuHorizontal visivel") {

		menu.className = "menuHorizontal";
		// para fechar o menu depois //

	}

	else {
		menu.className = "menuHorizontal visivel";
	}

}

botaoMenuHamburguer.onclick = abrirMenu;

//deixar o botão gostei em vermelho após o clique//

//var botaoAmei = document.querySelector(".botao.amei");

//botaoAmei.onclick = function() {
//	botaoAmei.style.background = "red";
//}



var botoesAmei = document.querySelectorAll(".botao.amei");

function pintarRed() {
	this.className = "botao amei vermelho"; //substituímos a var por this//
	//porque há vários botões e queremos que qualquer um deles funcione//
}

botoesAmei[0].onclick = pintarRed; //estamos usando ARRAY//
botoesAmei[1].onclick = pintarRed;
botoesAmei[2].onclick = pintarRed;