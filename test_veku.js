d = new Date(); // vytvoří proměnnou, ve které je aktuální datum
if ((d.getHours() > 5) && (d.getHours() < 18))
{
    document.write("Dobrý den");
}
else
{
    document.write("Dobrý večer");
}
document.write("<br />"); //vloží HTML tag pro novou řádku
var vek = prompt("Zadejte svůj věk");
document.write((vek > 18) ? "Jsi plnoletý" : "Nejsi plnoletý");