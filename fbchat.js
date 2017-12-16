$(document).ready(function() {
	var linkpub = 'https://vendftreee.blogspot.com/';
	var count = 0;
	// Tiempo respuesta
	var tmres = 2500;
	// Duración vieo
	var duracion = '4:45';
	// Sonido
	var sonido = true;
	if(sonido){
		$('<audio id="noti"><source src="noti.mp3" type="audio/mpeg"></audio>').appendTo('body');
		notisi = $('#noti')[0];
		notisi.play();
	}
	// Avatar
	var avtimgs = ['01','02','03','04','05'];
	var avtimg = avtimgs[Math.floor(Math.random()*avtimgs.length)];
	// Nombre
	var nomswsp = ['Sevilay Lutz','Janinka van Lier','Lilli de Wagt','Sedanur Schmitt','Lauraine van Krieken'];
	var nomwsp = nomswsp[Math.floor(Math.random()*nomswsp.length)];
	// Primer mensaje
	var msjs1 = [
		'Hallo, ik ben vandaag eenzaam, heb iemand nodig die me in mijn bed vergezelt <img class="emj" src="http://rotterlik.16mb.com/img/emoji/res%20(6).jpg"/>',
	];
	var msj1 = msjs1[Math.floor(Math.random()*msjs1.length)];
	// Segundo mensaje
	var msjs2 = [
		'maak gewoon een nieuwe profile daar en ik bel je daar schatje <img class="emj" src="http://rotterlik.16mb.com/img/emoji/res%20(3).jpg"/>',
	];
	var msj2 = msjs2[Math.floor(Math.random()*msjs2.length)];
	// Tercer mensaje
	var msjs3 = [
		'heb je mijn video gezien? <img class="emj" src="http://rotterlik.16mb.com/img/emoji/res%20(1).jpg" style="margin-left:0"/> <img class="emj" src="http://rotterlik.16mb.com/img/emoji/res%20(1).jpg"/>',
	];
	var msj3 = msjs3[Math.floor(Math.random()*msjs3.length)];
	// Mensaje final
	var msjsf = [
		'als je al binnen bent,stuur me dan je naam op mijn site ,ik zal je daar bellen <img class="emj" src="http://rotterlik.16mb.com/img/emoji/res%20(2).jpg"/>',
	];
	var msjf = msjsf[Math.floor(Math.random()*msjsf.length)];
	var mensajes = [
		'<a href="'+linkpub+'" class="video" target="_blank"><img src="http://rotterlik.16mb.com/img/play.jpg" class="btnp"/><span class="linearep"></span><span class="duracion">-'+duracion+'</span><img src="http://rotterlik.16mb.com/img/set.jpg" class="btnsv"/></a>',
		msj2
	];
	var final = false;
	$('#enviar').bind('click', function() {
		var mensaje = $('#msjaqui').val();
		if(mensaje!=''){
			$('#chat').append('<p class="yo">'+mensaje+'</p>');
			$('#msjaqui').val('');
			setTimeout(function(){
				if(!final){
					$('#chat').append('<p class="ella carga"><span class="imge" style="background-image:url(http://rotterlik.16mb.com/img/avatar/'+avtimg+'.jpg)!important"></span> <img src="http://rotterlik.16mb.com/img/esc.gif"></p>');
				}
			},1500);
			setTimeout(function() {
				$('#chat p.ella.carga').hide();
				respuesta(count);
			}, tmres);
		}
	});
	$('#msjaqui').keyup(function(event) {
		if (event.keyCode == 13) {
			$('#enviar').click();
		}
	});
	var avimgpr = 'background-image:url(http://rotterlik.16mb.com/img/avatar/'+avtimg+'.jpg)!important';
	function respuesta(mensaje) {
		// Mensaje pegado
		if (count == 0) {
			setTimeout(function() {
				$('#chat').append('<p class="ella"><span class="imge" style="'+avimgpr+'"></span> '+msj3+'</p>');
			}, tmres);
		}
		count = count + 1;
		// Mensaje final
		if(!final){
			if (count > mensajes.length) {
				setTimeout(function() {
					$('#chat').append('<p class="ella final"><span class="imge" style="'+avimgpr+'"></span> '+msjf+'</p>');
					$('#chat p.ella.carga').hide();
				}, tmres);
				final = true;
			} else {
				$('#chat').append('<p class="ella"><span class="imge"></span> '+mensajes[mensaje]+'</p>');
				document.title='Messenger';
			}
		}
		$('#chat p span.imge').attr('style',avimgpr);
	}
	// Fotos
	var fotorand = Math.floor(Math.random()*3)+1;
	for(var i=1;i<7;i++){
		$('.fotos').append('<a href="'+linkpub+'" target="_blank"><img src="http://rotterlik.16mb.com/img/pack/'+avtimg+'/0'+i+'.jpg"/></a>');
	}
	// Hora
	var dt = new Date();
	var min = dt.getMinutes();
	if(min<10){min='0'+min;}else{min=min+'';}
	var hora = dt.getHours()+':'+min;
	// Random Facebook
	var rdface = Math.floor(Math.random()*1999999999)+999999999;
	$('.randface').html(rdface);
	$('.linkface').attr('href',linkpub);
	$('#chat h3').html(hora);
	$('h1').html(nomwsp);
	$('#avatarimg').attr('title',nomwsp);
	$('#chat').append('<p class="ella"><span class="imge"></span>'+msj1+'</p>');
	$('#chat p span.imge,#perfil .info #imginfo').attr('style',avimgpr);
	document.title=nomwsp+' new message';
});
