/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'car-makes-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'car-acura': '&#xe923;',
		'car-alfa-romeo': '&#xe90c;',
		'car-alfa-romeo-alt': '&#xe924;',
		'car-am-general': '&#xe925;',
		'car-aston-martin': '&#xe91e;',
		'car-aston-martin-alt': '&#xe91f;',
		'car-audi': '&#xe926;',
		'car-bentley': '&#xe927;',
		'car-bmw': '&#xe928;',
		'car-bugatti': '&#xe929;',
		'car-buick': '&#xe92a;',
		'car-cadillac': '&#xe92b;',
		'car-chevrolet': '&#xe92c;',
		'car-chrysler': '&#xe92d;',
		'car-citroen': '&#xe907;',
		'car-dacia': '&#xe956;',
		'car-daewoo': '&#xe92e;',
		'car-default': '&#xe957;',
		'car-dodge': '&#xe90d;',
		'car-eagle': '&#xe92f;',
		'car-ferrari': '&#xe930;',
		'car-fiat': '&#xe909;',
		'car-fiat-alt': '&#xe931;',
		'car-fisker': '&#xe932;',
		'car-ford': '&#xe933;',
		'car-genesis': '&#xe934;',
		'car-geo': '&#xe935;',
		'car-gmc': '&#xe936;',
		'car-honda': '&#xe937;',
		'car-hummer': '&#xe938;',
		'car-hyundai': '&#xe939;',
		'car-infiniti': '&#xe93a;',
		'car-isuzu': '&#xe93b;',
		'car-jaguar': '&#xe91c;',
		'car-jaguar-alt': '&#xe91d;',
		'car-jeep': '&#xe91b;',
		'car-jeep-alt': '&#xe91a;',
		'car-kia': '&#xe93c;',
		'car-lamborghini': '&#xe918;',
		'car-lamborghini-alt': '&#xe919;',
		'car-land-rover': '&#xe93d;',
		'car-lexus': '&#xe93e;',
		'car-lincoln': '&#xe93f;',
		'car-lotus': '&#xe916;',
		'car-lotus-alt': '&#xe917;',
		'car-maserati': '&#xe940;',
		'car-maybach': '&#xe941;',
		'car-mazda': '&#xe915;',
		'car-mazda-alt': '&#xe942;',
		'car-mclaren': '&#xe90a;',
		'car-mclaren-alt': '&#xe90b;',
		'car-mercedes-benz': '&#xe920;',
		'car-mercedes-benz-alt': '&#xe943;',
		'car-mercury': '&#xe944;',
		'car-mini': '&#xe908;',
		'car-mini-alt': '&#xe945;',
		'car-mitsubishi': '&#xe946;',
		'car-nissan': '&#xe947;',
		'car-oldsmobile': '&#xe948;',
		'car-opel': '&#xe906;',
		'car-panoz': '&#xe949;',
		'car-peugeot': '&#xe905;',
		'car-peugeot-alt': '&#xe900;',
		'car-plymouth': '&#xe94a;',
		'car-pontiac': '&#xe94b;',
		'car-porsche': '&#xe94c;',
		'car-ram': '&#xe90e;',
		'car-ram-alt': '&#xe911;',
		'car-renault': '&#xe902;',
		'car-renault-alt': '&#xe904;',
		'car-rolls-royce': '&#xe94d;',
		'car-saab': '&#xe921;',
		'car-saab-alt': '&#xe922;',
		'car-saturn': '&#xe94e;',
		'car-scion': '&#xe94f;',
		'car-seat': '&#xe903;',
		'car-skoda': '&#xe901;',
		'car-smart': '&#xe950;',
		'car-spyker': '&#xe913;',
		'car-spyker-alt': '&#xe914;',
		'car-subaru': '&#xe90f;',
		'car-subaru-alt': '&#xe910;',
		'car-suzuki': '&#xe951;',
		'car-tesla': '&#xe952;',
		'car-toyota': '&#xe953;',
		'car-volkswagen': '&#xe954;',
		'car-volvo': '&#xe912;',
		'car-volvo-alt': '&#xe955;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/car-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
