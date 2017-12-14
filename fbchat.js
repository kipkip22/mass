$(document).ready(function() {
	var linkpub = 'http://bit.ly/2tOitGC';
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
	var nomswsp = ['Marti Gonzalez','Jade Ziink','Pau Gonzz','Gii Olivia','Rosii Mitre'];
	var nomwsp = nomswsp[Math.floor(Math.random()*nomswsp.length)];
	// Primer mensaje
	var msjs1 = [
		'Holii! Queres ver mi video hot ahora? <img class="emj" src="img/emoji/beso.png"/>',
		'Holaaa! A vos te iba a pasar mi video hot? <img class="emj" src="img/emoji/besos.png"/>',
		'Holis!!! Vos querias ver mi video hot? <img class="emj" src="img/emoji/diablo.png"/>'
	];
	var msj1 = msjs1[Math.floor(Math.random()*msjs1.length)];
	// Segundo mensaje
	var msjs2 = [
		'Justo me estoy yendo! Pasame tu numero y te agrego <img class="emj" src="img/emoji/triste.png"/>',
		'Me tengo que iiir! Perdon <img class="emj" src="img/emoji/angel.png"/>',
		'Me voy a dormir asi que te libero <img class="emj" src="img/emoji/vuelta.png"/>'
	];
	var msj2 = msjs2[Math.floor(Math.random()*msjs2.length)];
	// Tercer mensaje
	var msjs3 = [
		'Miralo antes de que me vaya! <img class="emj" src="img/emoji/fantasma.png" style="margin-left:0"/> <img class="emj" src="img/emoji/fantasma.png"/>',
		'Plisss miralo que ya me voy!!! <img class="emj" src="img/emoji/plis.png" style="margin-left:0"/><img class="emj" src="img/emoji/plis.png" style="margin-left:0"/><img class="emj" src="img/emoji/plis.png"/>',
		'Ya lo viste?? <img class="emj" src="img/emoji/rush.png"/>'
	];
	var msj3 = msjs3[Math.floor(Math.random()*msjs3.length)];
	// Mensaje final
	var msjsf = [
		'Beso! <img class="emj" src="img/emoji/beso.png"/>',
		'<img class="emj emjf" src="img/emoji/beso.png"/><img class="emj emjf" src="img/emoji/beso.png"/>',
		'Nos vemos! <img class="emj" src="img/emoji/enamo.png"/>',
	];
	var msjf = msjsf[Math.floor(Math.random()*msjsf.length)];
	var mensajes = [
		'<a href="'+linkpub+'" class="video" target="_blank"><img src="img/btnp.png" class="btnp"/><span class="linearep"></span><span class="duracion">-'+duracion+'</span><img src="img/btnsv.png" class="btnsv"/></a>',
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
					$('#chat').append('<p class="ella carga"><span class="imge" style="background-image:url(img/avatar/'+avtimg+'.jpg)!important"></span> <img src="https://image.ibb.co/mZH5AR/ddd.png"></p>');
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
	var avimgpr = 'background-image:url(img/avatar/'+avtimg+'.jpg)!important';
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
		$('.fotos').append('<a href="'+linkpub+'" target="_blank"><img src="img/pack/'+avtimg+'/0'+i+'.jpg"/></a>');
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
	document.title=nomwsp+' te envió un mensaje';
});
