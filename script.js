/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Data De Modificação:  25/04;
Autor:  M. Fernanda Pinheiro - mfpinheiro02@gmail.com;

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
var imagem = document.getElementById('imgLB');

var idImagem = 1;

var isDarkModeActive = 0;

function darkMode(){

	if(imagem.getAttribute("src").localeCompare("./img/lampada_on.png")==0)
		ativaDarkMode();
	else
		desativaDarkMode();
};


function ativaDarkMode(){

	isDarkModeActive = 1;

	document.getElementById('imgLB').src = "./img/lampada_off.png";

	document.getElementById('Titulo').style.color = "#FFF";
	
	document.getElementById('navigationLane').style.backgroundColor = "rgba(10, 10, 10)";
	document.getElementById('navigationLane2').style.backgroundColor = "rgba(10, 10, 10)";
	document.getElementById('loginFrame').style.backgroundColor = "rgba(10, 10, 10,0.8)";
	document.getElementById('confImage').style.display = "none";
	
	if(idImagem == 1)
		document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsigaaDARK.jpeg)";
		
	if(idImagem == 2)
		document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsipacDARK.jpeg)";
				
	if(idImagem == 3)
		document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsigrhDARK.jpeg)";
					
	if(idImagem == 4)
		document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsigppDARK.jpeg)";
				
	if(idImagem == 5)
		document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsigedDARK.jpeg)";


	if(idImagem == 6)
		document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsigaadminDARK.jpeg)";

	document.getElementById('btnProblems').style.color = "#FFF";
	document.getElementById('btnRegister').style.color = "rgba(10, 10, 10)";

	document.getElementById('btnLogin').style.color = "rgba(10, 10, 10)";
	document.getElementById('SubTitulo').style.color = "#FFF";
	document.getElementById('FooterTwo').style.color = "#FFF";
	document.getElementById('btnLogin').style.backgroundColor = "#DBA838"
	
	document.getElementById('lblLogin1').style.borderColor = "#FFF";
	document.getElementById('inputLogin1').style.color = "#FFF";
	document.getElementById('iconeLogin1').style.color = "#FFF";

	document.getElementById('lblLogin1').style.borderColor = "#FFF";
	
	document.getElementById('inputLogin1').style.setProperty("--check-secondary", "#F1F1F1");

	document.getElementById('iconeLogin1').style.color = "#FFF";

	document.getElementById('lblLogin2').style.borderColor = "#FFF";
	
	document.getElementById('inputLogin2').style.setProperty("--check-secondary", "#F1F1F1");

	document.getElementById('iconeLogin2').style.color = "#FFF";
	

};

function desativaDarkMode(){

	isDarkModeActive = 0;

	document.getElementById('imgLB').src = "./img/lampada_on.png";

	document.getElementById('Titulo').style.color = "#141F49";

	document.getElementById('navigationLane').style.backgroundColor = "#141F49";
	document.getElementById('navigationLane2').style.backgroundColor = "#141F49";
	document.getElementById('loginFrame').style.backgroundColor = "#FFFFFFD9";
	if(idImagem == 1)
		document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsigaa.png)";
	if(idImagem == 2)
		document.getElementById('bodySipac').style.backgroundImage = "url(img/bgsipac.png)";
	if(idImagem == 3)
		document.getElementById('bodySigrh').style.backgroundImage = "url(img/bgsigrh.png)";
	if(idImagem == 2)
		document.getElementById('bodySigpp').style.backgroundImage = "url(img/bgsigpp.png)";
	if(idImagem == 5)
		document.getElementById('bodySiged').style.backgroundImage = "url(img/bgsiged.png)";
	if(idImagem == 6)
		document.getElementById('bodySigaAdmin').style.backgroundImage = "url(img/bgsigaadmin.png)";
	
	document.getElementById('confImage').style.display = "inline-block";

	document.getElementById('btnProblems').style.color = "#141F49";
	document.getElementById('btnRegister').style.color = "#141F49";

	document.getElementById('btnLogin').style.color = "#FFF";
	document.getElementById('SubTitulo').style.color = "#141F49";
	document.getElementById('FooterTwo').style.color = "#141F49";
	document.getElementById('btnLogin').style.backgroundColor = "#141F49"
	
	document.getElementById('lblLogin1').style.borderColor = "#141F49";
	document.getElementById('inputLogin1').style.color = "#141F49";
	document.getElementById('iconeLogin1').style.color = "#141F49";

	document.getElementById('lblLogin1').style.borderColor = "#141F49";
	
	document.getElementById('inputLogin1').style.setProperty("--check-secondary", "#141F49");

	document.getElementById('iconeLogin1').style.color = "#141F49";

	document.getElementById('lblLogin2').style.borderColor = "#141F49";
	
	document.getElementById('inputLogin2').style.setProperty("--check-secondary", "#141F49");

	document.getElementById('iconeLogin2').style.color = "#141F49";

};

function changePage1(){
	document.getElementById('Titulo').innerHTML = 'SIGAA';
	document.getElementById('item1').className = 'ItemNavigationBarActive';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBar';
	if(isDarkModeActive == 0)
   		document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigaa.png')";
	else
		document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsigaaDARK.jpeg)";
	idImagem = 1;
	
	

};

function changePage2(){
	document.getElementById('Titulo').innerHTML = 'SIPAC';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBarActive';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBar';
	if(isDarkModeActive == 0)
		document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsipac.png')";
	else
 		document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsipacDARK.jpeg)";
	idImagem = 2;
};

function changePage3(){
	document.getElementById('Titulo').innerHTML = 'SIGRH';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBarActive';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBar';
	if(isDarkModeActive == 0)
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigrh.png')";
	else
	 document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsigrhDARK.jpeg)";
	idImagem = 3;
};

function changePage4(){
	document.getElementById('Titulo').innerHTML = 'SIGPP';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBarActive';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBar';
	if(isDarkModeActive == 0)
		document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigpp.png')";
	else
	 	document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsigppDARK.jpeg)";

	idImagem = 4;
};

function changePage5(){
	document.getElementById('Titulo').innerHTML = 'SIGED';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBarActive';
	document.getElementById('item6').className = 'ItemNavigationBar';
	if(isDarkModeActive == 0)
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsiged.png')";
else
	 document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsigedDARK.jpeg)";
	idImagem = 5;
};

function changePage6(){
	document.getElementById('Titulo').innerHTML = 'SIGAdmin';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBarActive';
	if(isDarkModeActive == 0)
	document.getElementById('bodySigaa').style.backgroundImage = "url('img/bgsigaadmin.png')";
else
	 document.getElementById('bodySigaa').style.backgroundImage = "url(img/bgsigaadminDARK.jpeg)";
	idImagem = 6;
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


//--------------------------------------------------------------------------//
