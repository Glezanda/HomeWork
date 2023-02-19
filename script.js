const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;

//https://www.geeksforgeeks.org/how-to-convert-from-binary-to-decimal/
//https://portal.matematickabiologie.cz/index.php?pg=zaklady-informatiky-pro-biology--teoreticke-zaklady-informatiky--teorie-cisel--prevody-mezi-ciselnymi-soustavami#:~:text=P%C5%99evod%20desetinn%C3%BDch%20%C4%8D%C3%ADsel%3A%20Bin%C3%A1rn%C3%AD%20desetinn%C3%A1,%2B%200.125%20%2B%200.0625%20%3D%205.6875
