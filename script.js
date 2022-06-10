/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Data De Modificação:  25/04;
Autor:  M. Fernanda Pinheiro - mfpinheiro02@gmail.com;*/
function changePage1(){
	document.getElementById('Titulo').innerHTML = 'SIGAA';
	document.getElementById('item1').className = 'ItemNavigationBarActive';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBar';
    document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigaa.png')";
	//evento para quando for clicado alterar para o modo dark mode
	document.getElementById('DarkMode').addEventListener("click",darkMode_imagens1);
};

function changePage2(){
	document.getElementById('Titulo').innerHTML = 'SIPAC';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBarActive';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBar';
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsipac.png')";
	//evento para quando for clicado alterar para o modo dark mode
	document.getElementById('DarkMode').addEventListener("click",darkMode_imagens2);

	
};

function changePage3(){
	document.getElementById('Titulo').innerHTML = 'SIGRH';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBarActive';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBar';
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigrh.png')";
	//evento para quando for clicado alterar para o modo dark mode
	document.getElementById('DarkMode').addEventListener("click",darkMode_imagens3);

};

function changePage4(){
	document.getElementById('Titulo').innerHTML = 'SIGPP';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBarActive';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBar';
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigpp.png')";
	//evento para quando for clicado alterar para o modo dark mode
	document.getElementById('DarkMode').addEventListener("click",darkMode_imagens4);

};

function changePage5(){
	document.getElementById('Titulo').innerHTML = 'SIGED';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBarActive';
	document.getElementById('item6').className = 'ItemNavigationBar';
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsiged.png')";
	//evento para quando for clicado alterar para o modo dark mode
	document.getElementById('DarkMode').addEventListener("click",darkMode_imagens5);

};

function changePage6(){
	document.getElementById('Titulo').innerHTML = 'SIGAdmin';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBarActive';
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigaadmin.png')";
	
	//evento para quando for clicado alterar para o modo dark mode
	document.getElementById('DarkMode').addEventListener("click",darkMode_imagens6);
	


		
	
};





function openPopUp() { //mostrar menu popup no display
	document.getElementById('menuPopUp').style.display = 'block'; //faz aparecer o menu pop/up
}

function closePopUp() {//ocultar menu popup no display
	document.getElementById('menuPopUp').style.display = 'none';
}


//-----------------------------------------------------------------------------------//
/*mostra o menu na forma mobile*/
function menu_mobile()
{
  if(document.getElementById("mobile").style.display == 'block'){
	document.getElementById("mobile").style.display = 'none';
  }else{
	document.getElementById("mobile").style.display = 'block';
  };

  // document.getElementById("mobile").style.backgroundColor = " #141F49"
 
}

/*fecha o menu mobile após escolher a opção*/
function menu_mobile_fechar()
{
	    document.getElementById("mobile").style.display = "none";
}

//---------------------------------------------------------------------------------//
/*muda o nome da logo de acordo com o sistema corrente*/
function escreve_sigaa()
{
	document.getElementById("logo").innerHTML = "SIGAA";
}
/*muda o nome da logo de acordo com o sistema corrente*/
function escreve_sipac()
{
	document.getElementById("logo").innerHTML = "SIPAC";
}
/*muda o nome da logo de acordo com o sistema corrente*/
function escreve_siged()
{
	document.getElementById("logo").innerHTML = "SIGED";
}
/*muda o nome da logo de acordo com o sistema corrente*/
function escreve_sigpp()
{
	document.getElementById("logo").innerHTML = "SIGPP";
}
/*muda o nome da logo de acordo com o sistema corrente*/
function escreve_sigadmin()
{
	document.getElementById("logo").innerHTML = "SIGAdmin";

}
/*muda o nome da logo de acordo com o sistema corrente*/
function escreve_sigrh()
{
	document.getElementById("logo").innerHTML = "SIGRH";
}
//----------------------------------------------------------------------------//




function darkMode_imagens6() {
	document.querySelector("input").style.color = "#ffffff";
	document.querySelector("button").style.backgroundColor = "#DBA838";
	document.querySelector("a").style.color = "#ffffff";
	document.querySelector("h4").style.color = "#ffffff";
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigaadmindark.jpeg')";
	document.getElementById("passwordicon").style.color = "ffffff";
	document.getElementById('Titulo').style.color = "#ffffff";
	document.getElementById('h2').style.color = "#ffffff";
	document.getElementById('usericon').style.color = "#ffffff";	
	document.getElementById('navigationLane').style.backgroundColor = "#101010";
	document.getElementById('loginFrame').style.backgroundColor = "#000000";
	document.getElementById('loginFrame').style.opacity = "85%";
	document.getElementById('confImage').style.display = "none";
	document.getElementById('DarkMode').style.display="none";
	document.getElementById('LightMode').style.display="block";

	// falta mudar a cor do placeholder 

	// falta mudar a cor do input
		
}
function darkMode_imagens5()
{
	document.querySelector("input").style.color = "#ffffff";
	document.querySelector("button").style.backgroundColor = "#DBA838";
	document.querySelector("a").style.color = "#ffffff";
	document.querySelector("h4").style.color = "#ffffff";
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigeddark.jpeg')";
	document.getElementById("passwordicon").style.color = "ffffff";
	document.getElementById('Titulo').style.color = "#ffffff";
	document.getElementById('h2').style.color = "#ffffff";
	document.getElementById('usericon').style.color = "#ffffff";	
	document.getElementById('navigationLane').style.backgroundColor = "#101010";
	document.getElementById('loginFrame').style.backgroundColor = "#000000";
	document.getElementById('loginFrame').style.opacity = "85%";
	document.getElementById('confImage').style.display = "none";
	document.getElementById('DarkMode').style.display="none";
	document.getElementById('LightMode').style.display="block";

	// falta mudar a cor do placeholder 

	// falta mudar a cor do input
}
function darkMode_imagens4()
{
	document.querySelector("input").style.color = "#ffffff";
	document.querySelector("button").style.backgroundColor = "#DBA838";
	document.querySelector("a").style.color = "#ffffff";
	document.querySelector("h4").style.color = "#ffffff";
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigppdark.jpeg')";
	document.getElementById("passwordicon").style.color = "ffffff";
	document.getElementById('Titulo').style.color = "#ffffff";
	document.getElementById('h2').style.color = "#ffffff";
	document.getElementById('usericon').style.color = "#ffffff";	
	document.getElementById('navigationLane').style.backgroundColor = "#101010";
	document.getElementById('loginFrame').style.backgroundColor = "#000000";
	document.getElementById('loginFrame').style.opacity = "85%";
	document.getElementById('confImage').style.display = "none";
	document.getElementById('DarkMode').style.display="none";
	document.getElementById('LightMode').style.display="block";

	// falta mudar a cor do placeholder 

	// falta mudar a cor do input
}
function darkMode_imagens3()
{
	document.querySelector("input").style.color = "#ffffff";
	document.querySelector("button").style.backgroundColor = "#DBA838";
	document.querySelector("a").style.color = "#ffffff";
	document.querySelector("h4").style.color = "#ffffff";
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigrhdark.jpeg')";
	document.getElementById("passwordicon").style.color = "ffffff";
	document.getElementById('Titulo').style.color = "#ffffff";
	document.getElementById('h2').style.color = "#ffffff";
	document.getElementById('usericon').style.color = "#ffffff";	
	document.getElementById('navigationLane').style.backgroundColor = "#101010";
	document.getElementById('loginFrame').style.backgroundColor = "#000000";
	document.getElementById('loginFrame').style.opacity = "85%";
	document.getElementById('confImage').style.display = "none";
	document.getElementById('DarkMode').style.display="none";
	document.getElementById('LightMode').style.display="block";

	// falta mudar a cor do placeholder 

	// falta mudar a cor do input
}
function darkMode_imagens2()
{
	document.querySelector("input").style.color = "#ffffff";
	document.querySelector("button").style.backgroundColor = "#DBA838";
	document.querySelector("a").style.color = "#ffffff";
	document.querySelector("h4").style.color = "#ffffff";
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsipacdark.jpeg')";
	document.getElementById("passwordicon").style.color = "ffffff";
	document.getElementById('Titulo').style.color = "#ffffff";
	document.getElementById('h2').style.color = "#ffffff";
	document.getElementById('usericon').style.color = "#ffffff";	
	document.getElementById('navigationLane').style.backgroundColor = "#101010";
	document.getElementById('loginFrame').style.backgroundColor = "#000000";
	document.getElementById('loginFrame').style.opacity = "85%";
	document.getElementById('confImage').style.display = "none";
	document.getElementById('DarkMode').style.display="none";
	document.getElementById('LightMode').style.display="block";
	document.getElementById(input).style.color = "#ffffff";
	document.getElementById('loginBox').style.color = "#ffffff";
	
}
function darkMode_imagens1() {
	document.querySelector("input").style.color = "#ffffff";
	document.querySelector("button").style.backgroundColor = "#DBA838";
	document.querySelector("a").style.color = "#ffffff";
	document.querySelector("h4").style.color = "#ffffff";
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigaadark.jpeg')";
	document.getElementById("passwordicon").style.color = "ffffff";
	document.getElementById('Titulo').style.color = "#ffffff";
	document.getElementById('h2').style.color = "#ffffff";
	document.getElementById('usericon').style.color = "#ffffff";	
	document.getElementById('navigationLane').style.backgroundColor = "#101010";
	document.getElementById('loginFrame').style.backgroundColor = "#000000";
	document.getElementById('loginFrame').style.opacity = "85%";
	document.getElementById('confImage').style.display = "none";
	document.getElementById('DarkMode').style.display="none";
	document.getElementById('LightMode').style.display="block";

	// falta mudar a cor do placeholder 

	// falta mudar a cor do input
}


