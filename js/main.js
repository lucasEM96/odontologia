/*
*Copyright 2017 Lucas Elvira Martín.
*
*Se concede permiso para copiar, distribuir y/o modificar este documento ba-
*jo los terminos de la Licencia de Documentaci ́on Libre de GNU, Versi ́on 1.2
*o cualquier otra versi ́on posterior publicada por la Free Software Foundation;
*sin Secciones Invariantes ni Textos de Cubierta Delantera ni Textos de
*Cubierta Trasera.
*/


/*
* Visualización de los datos
*/
var pos = {},
	h = innerHeight,
	w= innerWidth,
	svg = d3.select("svg").attr('width', w).attr('height', h),
	cont = 1,
	d1 = 150,
	d = [],
	moveFlag = false,
	entra = false,
	txtVisible = false,
	center = svg.append('circle');
	center.attr('cx', w/4)
			.attr('cy', h/2)
			.attr('r', 40)
			.attr('class', 'center nucleo')			
			.attr('id', 'center1')
			.attr('grupo', 'n1');
	textInit = svg.append('text')
			.attr('x', w/4-25)
			.attr('y', h/2)
			.attr('fill', 'white')
			.text(function(){return 'Grupo 1'});
			
	center = svg.append('circle');
	center.attr('cx', 3*w/4)
			.attr('cy', h/2)
			.attr('r', 40)
			.attr('class', 'center nucleo')			
			.attr('id', 'center2')
			.attr('grupo', 'n2');
	textInit = svg.append('text')
			.attr('x', 3*w/4-25)
			.attr('y', h/2)
			.attr('fill', 'white')
			.text(function(){return 'Grupo 2'});		
			


Array.prototype.pushMe = function(n, val) {
//Esta función permite rellenar arrays unidimensionales con el mismo valor    
    for (x = 0; x< n; x++){
            this.push(val)
        }    
    return this
};

Array.prototype.checkMe = function(val){
//Esta función te devuelve 'true' si todas las posiciones del array corresponden al valor del parametro
    for (var i=0; i<this.length;i++){
        if(this[i]!== val)
            return false
    }
    if (i===this.length)
        return true
};

function sleep(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));
}


svg.attr('width', w).attr('height', h)
d.pushMe(4, d1)




function toRadian(degree) {
	return n =  degree *  Math.PI/180;	
}

function posiciones(selfX,selfY, d1) {
	if (typeof(d1)=='undefined') d1 =150;
	var arr = [];
	for (var i = 0; i<= 360; i++){
		alpha = i;
		beta = 180-alpha;
		ceta = 180 - beta -90;
		x = d1*Math.sin(toRadian(beta))/Math.sin(90);
		y = d1*Math.sin(toRadian(ceta))/Math.sin(90);
		arr.push([])
		arr[i].push(selfX+x)
		arr[i].push(selfY-y)
	}
	return arr;
}

function crearCirculos(group, clase, color){
	var circle = svg.selectAll(clase)
					.data(group)
					.enter()
					.append("circle")
					.attr("r", function(d){
						return (typeof(d.r) !== 'undefined') ? d.r*20 : 2*20;
					})
					.attr('class', clase + ' nucleo')
					.attr('id', function(d){return d.id})
					.attr('parent',function(d){return d.parent})
					.attr('nivel', function(d){return d.nivel})
					.attr('toMake', function(d){return (typeof(d.toMake) == 'undefined')? '': d.toMake})
					.attr('grupo', function() {return clase.split('_')[0]})
					.attr('fill', color)
					.attr('index', function(d){return d.index})
					.attr('index_parent', function(d){return d.index_parent})
					.attr('index_grandParent', function(d){return d.index_grandParent});
	var	txt = svg.selectAll(clase+'Text')
			.data(group)
			.enter()
			.append('text')
			.attr('fill', 'white')
			.text(function(d){return d['nombre']})
		 	.style("font-size", function(d) { return Math.min(2 * d.r*20, (2 * d.r*20 - 8) / this.getComputedTextLength() * 17) + "px"; })
			.attr("dy", ".35em")
			.attr('class', clase+'Text');
			
	var link = svg.selectAll(clase+'Link')
				.data(group)
				.enter()				
				.append('line')
				.attr('class', clase+'Link')
				.style("stroke", "black");

	d.pushMe(group.length,d1)
	
}

function borrarCirculos(clases){
	$('.'+clases).remove();
	$('.'+clases+'Text').remove();
	$('.'+clases+'Link').remove();
}

async function move (n, obj, txt, links){
	/*
	*x Es a donde ha de llegar
	*y Es a donde ha de llegar
	*px Es donde está
	*py Es donde está
	*subirInit = true si y-py <0
	*izquierdaInit = true si x-px < 0
	*Subir e izquierda empiezan como true y cambian en cuanto el correspondiente haya cambiado
	*/
	px = [];
	py = [];
	subirInit = [];
	subirActual = [];
	izquierdaInit = [];
	izquierdaActual = [];
	subir = [];
	izquierda = [];
	x = [];
	y = []
	for (var i = 0; i<obj.length; i++){
		x.push(n[i][0])
		y.push(n[i][1])
		px.push(parseInt($(obj[i]).attr('cx')));
		py.push(parseInt($(obj[i]).attr('cy')));
		subirInit.push((y[i]-py[i]<0) ? true : false);
		subirActual.push((y[i]-py[i]<0) ? true : false);
		izquierdaInit.push((x[i]-px[i]>0) ? true : false);
		izquierdaActual.push((x[i]-px[i]>0) ? true : false);
		subir.push(true);
		izquierda.push(true);
	}
	v = 10;
	contador = 0
	while ((!subir.checkMe(false) || !izquierda.checkMe(false)) || contador === 0) {
		for (i = 0; i<obj.length; i++){
			if (izquierda[i])
			px[i] = (izquierdaInit[i]) ? px[i] + v : px[i] - v
			if (subir[i])
			py[i] = (!subirInit[i]) ? py[i] + v : py[i] - v
			$(obj[i]).attr({'cx': px[i], 'cy': py[i]})
			$(txt[i]).attr({'x': px[i]-$(obj[i]).attr('r'), 'y': py[i]})
			$(links[i]).attr({'x2': px[i], 'y2': py[i]})
			subirActual[i] = (y[i]-py[i]<0) ? true : false;
			izquierdaActual[i] = (x[i]-px[i]>0) ? true : false;
			//	subir[i] = (subirActual[i] == subirInit[i]) ? true : false
			if (izquierdaActual[i] !== izquierdaInit[i]) {izquierda[i] =false; $(obj[i]).attr({'cx': x[i]}); contador++}
			if (subirActual[i] !== subirInit[i]) {subir[i] = false; $(obj[i]).attr({'cx': px[i]}); contador++}
		}
		await sleep(20)
	}
	entra = true
	animate()
}

async function animate() {
	animateFlag = true
	var n = 0;
	var flag = false;
	var select = '';
	var degrees = 0;
	entra = true;
	nPos = 0;
	parent = '';
	while (entra) {
		var c = $('circle');
		var t = $('text');
		var l = $('line');
		for (var i= 2; i<c.length; i++){
			if ($(c[i]).attr('ocuped') == 'true') continue;
			flag = true;
			select = $(c[i]).attr('class').split(' ')[0];
			nPos = parseInt($(c[i]).attr('nPos'));
			nPos = (nPos !== 360)? nPos+1:0;
			parent = '#' + $(c[i]).attr('parent')
			parent = $(parent)
			parentX = parseInt(parent.attr('cx'));
			parentY = parseInt(parent.attr('cy'));
			pos[select] = posiciones(parentX, parentY, d[i])
			$(c[i]).attr('nPos', nPos)
			$(c[i]).attr({'cx': pos[select][nPos][0], 'cy': pos[select][nPos][1]})
			$(t[i]).attr({'x': pos[select][nPos][0]-$(c[i]).attr('r'), 'y': pos[select][nPos][1]})
			$(l[i-2]).attr({'x2': pos[select][nPos][0], 'y2': pos[select][nPos][1], 'x1':parentX, 'y1': parentY})
			
		}
		if (flag)
		n = (n==360) ? 0: n+1;
		await sleep(20)
	}
}


async function borrarTxt() {
	$('#info').animate({'top': w}, 1000);
	await sleep (1000);
	$('#info').remove()
	txtVisible = false;		
}



			

/*
* Interactividad
*/

$('body').on('click', '.nucleo', function(){
	/*
	*Esta función se encarga de analizar a que nodo se ha hecho click
	*y a que grupo pertenece y nivel pertence.
	*Primero vemos a que grupo se ha hecho click
	*Despues el nivel
	*/
	if ($(this).attr('toMake') == 'toInfo') return;
	var group = $(this).attr('grupo');
	var cont = (typeof($(this).attr('nivel'))  == 'undefined') ? 0 : parseInt($(this).attr('nivel'));
	var selfX = parseInt($(this).attr('cx'));
	var selfY = parseInt($(this).attr('cy'));
	var thisClass = $(this).attr('class');
	var index = $(this).index('.'+thisClass.split(' ')[0]);
	var selector = '';
	var id = $(this).attr('id');
	var index = parseInt($(this).attr('index'));
	var groupToSend = '';
	myClass = group+'_'+id;			
	groupToSend = eval(group);
	myClass = group+'_'+id;
	switch (cont) {
		case 0:
			medidas = 150;
			c = 'red';
			break;
		case 1:
			groupToSend = groupToSend[index]['hijos'];
			medidas = 75;
			c = 'blue';
			break;
		case 2:
			var index_parent = $(this).attr('index_parent');
			groupToSend = groupToSend[index_parent]['hijos'][index]['hijos'];
			medidas = 37;
			c = 'green';
			break;
		case 3:
			var index_parent = $(this).attr('index_parent');
			var index_grandParent = $(this).attr('index_grandParent');
			groupToSend = groupToSend[index_grandParent]['hijos'][index_parent]['hijos'][index]['hijos'];
			medidas = 19;
			c = 'darkgray';
		default:
			break;
	}

	selector = group+'_'+id;

	pos[selector] = posiciones(selfX,selfY, medidas);
	if ($(this).attr('clicked') == '0'){
		$(this).attr('clicked', '1')
		borrarCirculos(myClass)
		return;
	}
	$(this).attr('clicked', '0')
	crearCirculos(groupToSend, myClass, c);	
	var  pelotas = $('.'+myClass);
	var txt = $('.'+myClass+'Text');
	var links = $('.'+myClass+'Link');
	var actualPos = [];
	var n = [];
	pelotas.attr({'cx': selfX, 'cy': selfY});
	txt.attr({'x': selfX-30, 'y': selfY-30});
	links.attr({'x1': selfX, 'y1': selfY}) 
	for (var i = 0; i<pelotas.length; i++){
		n.push([])
		n[i].push(pos[selector][360/pelotas.length*i][0]);
		n[i].push(pos[selector][360/pelotas.length*i][1]);
		$(pelotas[i]).attr('nPos', 360/pelotas.length*i)
	}
	//	move(pos[n][0], pos[n][1],i, $(pelotas))
	entra = false;
	move(n, $(pelotas), $(txt), $(links))

});


$('body').on('click', '[toMake=toInfo]', function(){
	if (entra) return;
	if (!txtVisible){
		var index = $(this).attr('index')
		/*var txtInfo = infor[0]['txt'];*/
		var src = 'img'+index+'.jpg'
		var	txt = '<div id="info"><div id=close></div><div id="img"><img src="img/'+src+'"/></div></div>';
		$('body').append(txt);
		$('#info').css('top', h).animate({'top': '2%'}, 1000);
		txtVisible = true;		
	}
	else {
		borrarTxt();
	}

});

$('body').on('click', '#close', function(){borrarTxt()});

$('button').click(function(){
	if (entra){
		$(this).attr('value', 'a').html('Play')		
		entra = false;		
	}
	else{
		$(this).attr('value', 'p').html('Paused')		
		entra = true;
		animate();
	}
})


