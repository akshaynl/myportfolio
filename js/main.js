var greeting;
var time=new Date().getHours();
if(time<12)
{
greeting="Good Morning";
}
else if(time<16)
{
greeting="Good Afternoon";
}
else
{
greeting="Good Evening";
}
document.getElementById("demo").innerHTML=greeting;
var day;
switch(new Date().getDay()){
case 0:
day="Sunday";
break;
case 1:
day="Monday";
break;
case 2:
day="Tuesday";
break;
case 3:
day="Wednesday";
break;
case 4:
day="Thrusday";
break;
case 5:
day="Friday";
break;
case 6:
day="Saturday";
}
document.getElementById("demo1").innerHTML=day;