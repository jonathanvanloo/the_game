
// definiëren van de levels
const acties = [
{id:1, image: "img/3T-Splitsing.png", name: "T Splitsing.png", optie1: "Links", optie2: "Springen", optie3: "Rechts"},
{id:2, image: "img/4Links.jpg", name: "Links", optie1: 'Links', optie2: 'Springen', optie3: 'Rechts'},
{id:3, image: "img/5Rechts.jpg", name: "Rechts", optie1: 'Links', optie2: 'Springen', optie3: 'Rechts'},
{id:4, image: "img/6Steen.jpg", name: "Steen", optie1: 'Links', optie2: 'Springen', optie3: 'Rechts'},
{id:5, image: "img/7Dak.jpg", name: "Dak", optie1: 'Links', optie2: 'Springen', optie3: 'Rechts'},
{id:6, image: "img/8Waterval.jpg", name: "Waterval", optie1: 'Links', optie2: 'Springen', optie3: 'Rechts'},
{id:7, image: "img/9Zipline.jpg", name: "Zipline", optie1: 'Links', optie2: 'Springen', optie3: 'Rechts'},
{id:8, image: "img/deadend.jpg", name: "Loopt Dood", optie1: 'naar beginscherm'},
{id:9, image: "img/dood.jpg", name: "Game Over", optie1: 'naar beginscherm'},
{id:10, image: "img/win.jpg", name: "Gewonnen", optie1: 'opneiuw speelen?'},
];

// hieronder begint het spel en worden alle levels gemaakt

//starten van game
function gameStart() {
	document.getElementById('button1').style.visibility = "visible";
	document.getElementById('button3').style.visibility = "visible";
	level1()
}
// T-Splitsing
function level1() {
	document.getElementById('img').setAttribute("src", acties[0].image);
	document.getElementById('button1').innerHTML = acties[0].optie1;
	document.getElementById('button1').onclick = function() {level2()};
	document.getElementById('button2').innerHTML = acties[0].optie2;
	document.getElementById('button2').onclick = function() {gameOver()};
	document.getElementById('button3').innerHTML = acties[0].optie3;
	document.getElementById('button3').onclick = function() {level10()};
}
// Rechts
function level2(){
	document.getElementById('img').setAttribute("src", acties[2].image);
	document.getElementById('button1').innerHTML = acties[2].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[2].optie2;
	document.getElementById('button2').onclick = function() {gameOver()};
	document.getElementById('button3').innerHTML = acties[2].optie3;
	document.getElementById('button3').onclick = function() {level3()};
}
// Waterval
function level3(){
	document.getElementById('img').setAttribute("src", acties[5].image);
	document.getElementById('button1').innerHTML = acties[5].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[5].optie2;
	document.getElementById('button2').onclick = function() {level4()};
	document.getElementById('button3').innerHTML = acties[5].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// Links
function level4(){
	document.getElementById('img').setAttribute("src", acties[1].image);
	document.getElementById('button1').innerHTML = acties[1].optie1;
	document.getElementById('button1').onclick = function() {level5()};
	document.getElementById('button2').innerHTML = acties[1].optie2;
	document.getElementById('button2').onclick = function() {gameOver()};
	document.getElementById('button3').innerHTML = acties[1].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// T-Splitsing
function level5() {
	document.getElementById('img').setAttribute("src", acties[0].image);
	document.getElementById('button1').innerHTML = acties[0].optie1;
	document.getElementById('button1').onclick = function() {level6()};
	document.getElementById('button2').innerHTML = acties[0].optie2;
	document.getElementById('button2').onclick = function() {gameOver()};
	document.getElementById('button3').innerHTML = acties[0].optie3;
	document.getElementById('button3').onclick = function() {level20()};
}
// Dak
function level6(){
	document.getElementById('img').setAttribute("src", acties[4].image);
	document.getElementById('button1').innerHTML = acties[4].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[4].optie2;
	document.getElementById('button2').onclick = function() {level7()};
	document.getElementById('button3').innerHTML = acties[4].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// Rechts
function level7(){
	document.getElementById('img').setAttribute("src", acties[2].image);
	document.getElementById('button1').innerHTML = acties[2].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[2].optie2;
	document.getElementById('button2').onclick = function() {gameOver()};
	document.getElementById('button3').innerHTML = acties[2].optie3;
	document.getElementById('button3').onclick = function() {level8()};
}
// T-Splitsing
function level8() {
	document.getElementById('img').setAttribute("src", acties[0].image);
	document.getElementById('button1').innerHTML = acties[0].optie1;
	document.getElementById('button1').onclick = function() {level9()};
	document.getElementById('button2').innerHTML = acties[0].optie2;
	document.getElementById('button2').onclick = function() {gameOver()};
	document.getElementById('button3').innerHTML = acties[0].optie3;
	document.getElementById('button3').onclick = function() {level21()};
}
// Steen
function level9(){
	document.getElementById('img').setAttribute("src", acties[3].image);
	document.getElementById('button1').innerHTML = acties[3].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[3].optie2;
	document.getElementById('button2').onclick = function() {win()};
	document.getElementById('button3').innerHTML = acties[3].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// Links
function level10(){
	document.getElementById('img').setAttribute("src", acties[1].image);
	document.getElementById('button1').innerHTML = acties[1].optie1;
	document.getElementById('button1').onclick = function() {level11()};
	document.getElementById('button2').innerHTML = acties[1].optie2;
	document.getElementById('button2').onclick = function() {gameOver()};
	document.getElementById('button3').innerHTML = acties[1].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// Dak
function level11(){
	document.getElementById('img').setAttribute("src", acties[4].image);
	document.getElementById('button1').innerHTML = acties[4].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[4].optie2;
	document.getElementById('button2').onclick = function() {level12()};
	document.getElementById('button3').innerHTML = acties[4].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// T-Splitsing
function level12() {
	document.getElementById('img').setAttribute("src", acties[0].image);
	document.getElementById('button1').innerHTML = acties[0].optie1;
	document.getElementById('button1').onclick = function() {level13()};
	document.getElementById('button2').innerHTML = acties[0].optie2;
	document.getElementById('button2').onclick = function() {gameOver()};
	document.getElementById('button3').innerHTML = acties[0].optie3;
	document.getElementById('button3').onclick = function() {level19()};
}
// zipline
function level13(){
	document.getElementById('img').setAttribute("src", acties[6].image);
	document.getElementById('button1').innerHTML = acties[6].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[6].optie2;
	document.getElementById('button2').onclick = function() {level14()};
	document.getElementById('button3').innerHTML = acties[6].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// Rechts
function level14(){
	document.getElementById('img').setAttribute("src", acties[2].image);
	document.getElementById('button1').innerHTML = acties[2].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[2].optie2;
	document.getElementById('button2').onclick = function() {gameOver()};
	document.getElementById('button3').innerHTML = acties[2].optie3;
	document.getElementById('button3').onclick = function() {level15()};
}
// Links
function level15(){
	document.getElementById('img').setAttribute("src", acties[1].image);
	document.getElementById('button1').innerHTML = acties[1].optie1;
	document.getElementById('button1').onclick = function() {level16()};
	document.getElementById('button2').innerHTML = acties[1].optie2;
	document.getElementById('button2').onclick = function() {gameOver()};
	document.getElementById('button3').innerHTML = acties[1].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// Dak
function level16(){
	document.getElementById('img').setAttribute("src", acties[4].image);
	document.getElementById('button1').innerHTML = acties[4].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[4].optie2;
	document.getElementById('button2').onclick = function() {level17()};
	document.getElementById('button3').innerHTML = acties[4].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// Steen
function level17(){
	document.getElementById('img').setAttribute("src", acties[3].image);
	document.getElementById('button1').innerHTML = acties[3].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[3].optie2;
	document.getElementById('button2').onclick = function() {level18()};
	document.getElementById('button3').innerHTML = acties[3].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// Waterval
function level18(){
	document.getElementById('img').setAttribute("src", acties[5].image);
	document.getElementById('button1').innerHTML = acties[5].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[5].optie2;
	document.getElementById('button2').onclick = function() {deadEnd()};
	document.getElementById('button3').innerHTML = acties[5].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// Steen
function level19(){
	document.getElementById('img').setAttribute("src", acties[3].image);
	document.getElementById('button1').innerHTML = acties[3].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[3].optie2;
	document.getElementById('button2').onclick = function() {deadEnd()};
	document.getElementById('button3').innerHTML = acties[3].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// Links
function level20(){
	document.getElementById('img').setAttribute("src", acties[1].image);
	document.getElementById('button1').innerHTML = acties[1].optie1;
	document.getElementById('button1').onclick = function() {level20()};
	document.getElementById('button2').innerHTML = acties[1].optie2;
	document.getElementById('button2').onclick = function() {gameOver()};
	document.getElementById('button3').innerHTML = acties[1].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// Steen
function level20(){
	document.getElementById('img').setAttribute("src", acties[3].image);
	document.getElementById('button1').innerHTML = acties[3].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[3].optie2;
	document.getElementById('button2').onclick = function() {deadEnd()};
	document.getElementById('button3').innerHTML = acties[3].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// zipline
function level21(){
	document.getElementById('img').setAttribute("src", acties[6].image);
	document.getElementById('button1').innerHTML = acties[6].optie1;
	document.getElementById('button1').onclick = function() {gameOver()};
	document.getElementById('button2').innerHTML = acties[6].optie2;
	document.getElementById('button2').onclick = function() {deadEnd()};
	document.getElementById('button3').innerHTML = acties[6].optie3;
	document.getElementById('button3').onclick = function() {gameOver()};
}
// Win
function win(){
	document.getElementById('img').setAttribute("src", acties[9].image);
	document.getElementById('button1').style.visibility = "hidden";
	document.getElementById('button2').innerHTML = acties[9].optie1;
	document.getElementById('button2').onclick = function() {location.reload();};
	document.getElementById('button3').style.visibility = "hidden";
}
// DeadEnd
function deadEnd(){
	document.getElementById('img').setAttribute("src", acties[7].image);
	document.getElementById('button1').style.visibility = "hidden";
	document.getElementById('button2').innerHTML = acties[7].optie1;
	document.getElementById('button2').onclick = function() {location.reload();};
	document.getElementById('button3').style.visibility = "hidden";
}
// Dood
function gameOver(){
	document.getElementById('img').setAttribute("src", acties[8].image);
	document.getElementById('button1').style.visibility = "hidden";
	document.getElementById('button2').innerHTML = acties[8].optie1;
	document.getElementById('button2').onclick = function() {location.reload();};
	document.getElementById('button3').style.visibility = "hidden";
}