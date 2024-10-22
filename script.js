function Calc()
{	
	var box1 = document.getElementById("box1");
	box1.style.transform = "translateX(-50%)";
	box1.style.transitionProperty = "transform";
	box1.style.transitionDuration = "2s";
	box1.style.transform = "translateX(-130%)";

	var formulasBox = document.getElementById("formulasBox");
	formulasBox.style.transform = "translateX(-50%)";
	formulasBox.style.transitionProperty = "transform";
	formulasBox.style.transitionDuration = "2s";
	formulasBox.style.transform = "translateX(-255%)";

	var sustitucionBox = document.getElementById("sustitucionBox");
	sustitucionBox.style.visibility = "visible";
	sustitucionBox.style.transitionProperty = "opacity";
	sustitucionBox.style.transitionDuration = "4s";
	sustitucionBox.style.opacity = "100%";


	var totalBox = document.getElementById("totalBox");

	totalBox.style.visibility = "visible";
	totalBox.style.transitionProperty = "opacity";
	totalBox.style.transitionDuration = "5s";
	totalBox.style.opacity = "100%";

	
	var velocidad0 = document.getElementById("value_Velocidad0").value;
	var angulo = document.getElementById("value_Angulo").value;
	var anguloRadianes = angulo * Math.PI / 180;
	var gravedad = 9.81;

	var tiempoVuelo = ((2*(velocidad0)*Math.sin(anguloRadianes)) / gravedad);
	var totalVuelo = document.getElementById("total_TiempoVuelo").innerHTML = tiempoVuelo.toFixed(2) + " s";

    var formulaTiempoVuelo = `$$ t_f = \\frac{2( ${velocidad0})\\cdot \\sin(${anguloRadianes.toFixed(2)})}{${gravedad}} $$`;
    document.getElementById('formulaTiempoVuelo').innerHTML = formulaTiempoVuelo;

 	

	var alcanceHorizontal = ((Math.pow(velocidad0, 2) * Math.sin(2 * anguloRadianes)) / gravedad);
	document.getElementById("total_AlcanceHorizontal").innerHTML = alcanceHorizontal.toFixed(2) + " m";


	var formulaAlcanceHorizontal = `$$ R = \\frac{${(velocidad0)} ^2 \\cdot \\sin(2(${anguloRadianes.toFixed(2)}))}{${gravedad}} $$`;
    document.getElementById('formulaAlcanceHorizontal').innerHTML = formulaAlcanceHorizontal;

	MathJax.typeset();	
}

function Clear()
{

}

