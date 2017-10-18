document.writeln('Hello, world!');

var num1 = 5;
var num2 = 3;
document.writeln(num1+num2);

if(num1%2===0)
{
	document.writeln("Páros");
}
else
{
	document.writeln("Páratlan");
}
var i=0;

var trueOrFalse = true;

for(i; i<10; i++)
{
	if(i%2===0)
	{
		trueOrFalse=true;
		document.writeln(trueOrFalse);
	}
	else
	{
		trueOrFalse=false;
		document.writeln(trueOrFalse);
	}
}

var car =
{
	model:"Audi",
	color:"gray",
	num: 2
};

document.writeln(car.model);

document.writeln(typeof car.model);

var prop;

for(prop in car)
{
	document.writeln(prop);
}

delete car.num;

document.writeln("Törlés után:");

for(prop in car)
{
	document.writeln(prop);
}



var arrayTest = ["szar1", "szar2"];
document.writeln(arrayTest.length);

var funcTest = function(a,b)
{
	return a+b;
}

document.writeln(funcTest(1,8));



//document.writeln(car.model);
//document.writeln(car.color);






