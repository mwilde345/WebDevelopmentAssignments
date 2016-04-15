$('form').attr("action")
"run"
$('img')
[<img src=​"HTML5-Elements_files/​sky.jpg" alt=​"Watching the Sky by Nathaniel Reinhart" height=​"160" width=​"240">​]
$('img').attr("src","")
[<img src alt=​"Watching the Sky by Nathaniel Reinhart" height=​"160" width=​"240">​]
//takes the image out 
undefined
//put the image back in...
undefined

$("h1")
[<h1>​HTML5 Elements​</h1>​, <h1>​Header 1 <h1>​</h1>​]
$("h1").css("font")
"normal normal bold normal 32px/48px Georgia, 'Times New Roman', Times, serif"
$("h1").css("font-weight")
"bold"
$("h1").css("font-weight","italic")
[<h1>​HTML5 Elements​</h1>​, <h1>​Header 1 <h1>​</h1>​]
$("h1").addClass("highlight")
[<h1 class=​"highlight">​HTML5 Elements​</h1>​, <h1 class=​"highlight">​Header 1 <h1>​</h1>​]

$("form")
[<form action=​"run">​<fieldset>​<legend>​Form legend​</legend>​<label for=​"text-input">​Text input​</label>​<input id=​"text-input" type=​"text">​<br>​<button title=​"button">​Button​</button>​<br>​<select>​…​</select>​<br>​<textarea>​</textarea>​<br>​</fieldset>​</form>​]
$('#text-input')
[<input id=​"text-input" type=​"text">​]
$('#text-input').value
undefined
$('#text-input').value()
VM1228:2 Uncaught TypeError: $(...).value is not a function
    at <anonymous>:2:18
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)(anonymous function) @ VM1228:2InjectedScript._evaluateOn @ VM655:895InjectedScript._evaluateAndWrap @ VM655:828InjectedScript.evaluate @ VM655:694
$('#text-input').value()
VM1229:2 Uncaught TypeError: $(...).value is not a function
    at <anonymous>:2:18
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)(anonymous function) @ VM1229:2InjectedScript._evaluateOn @ VM655:895InjectedScript._evaluateAndWrap @ VM655:828InjectedScript.evaluate @ VM655:694
$('#text-input').val()
"avddv"
//that was a getter. we can do a setter
undefined
$('#text-input').val("Bigman")
[<input id=​"text-input" type=​"text">​]
$('#text-input').size("width","200px")
1
//didn't work
undefined
$('img').offset()
Object {top: 2819.8125, left: 108}
var pos = $('img').offset()
undefined
pos.left = 300;
300
$('img')
[<img src=​"HTML5-Elements_files/​sky.jpg" alt=​"Watching the Sky by Nathaniel Reinhart" height=​"160" width=​"240">​]
$('img').offset(pos)
[<img src=​"HTML5-Elements_files/​sky.jpg" alt=​"Watching the Sky by Nathaniel Reinhart" height=​"160" width=​"240">​]
$('img').width()
240
$('img').width(500)
[<img src=​"HTML5-Elements_files/​sky.jpg" alt=​"Watching the Sky by Nathaniel Reinhart" height=​"160" width=​"240" style=​"position:​ relative;​ top:​ 0px;​ left:​ 192px;​">​]
$('img').width()
500
$('img')
[<img src=​"HTML5-Elements_files/​sky.jpg" alt=​"Watching the Sky by Nathaniel Reinhart" height=​"160" width=​"240" style=​"position:​ relative;​ top:​ 0px;​ left:​ 192px;​ width:​ 500px;​">​]
$('img').height(500)
[<img src=​"HTML5-Elements_files/​sky.jpg" alt=​"Watching the Sky by Nathaniel Reinhart" height=​"160" width=​"240" style=​"position:​ relative;​ top:​ 0px;​ left:​ 192px;​ width:​ 500px;​">​]


$('img').after("<br>+<h1>My Picture</h1>")
[<img src=​"HTML5-Elements_files/​sky.jpg" alt=​"Watching the Sky by Nathaniel Reinhart" height=​"160" width=​"240" style=​"position:​ relative;​ top:​ 0px;​ left:​ 192px;​ width:​ 500px;​ height:​ 500px;​">​]
$('img').before("<br>+<h1>My Picture</h1>")
[<img src=​"HTML5-Elements_files/​sky.jpg" alt=​"Watching the Sky by Nathaniel Reinhart" height=​"160" width=​"240" style=​"position:​ relative;​ top:​ 0px;​ left:​ 192px;​ width:​ 500px;​ height:​ 500px;​">​]
$('img').remove()
[<img src=​"HTML5-Elements_files/​sky.jpg" alt=​"Watching the Sky by Nathaniel Reinhart" height=​"160" width=​"240" style=​"position:​ relative;​ top:​ 0px;​ left:​ 192px;​ width:​ 500px;​ height:​ 500px;​">​]
$('img')
[]
$('header')
[<header>​…​</header>​<hgroup>​…​</hgroup>​<!-- Example comment: Add valid elements within header group --><h1 class=​"highlight">​HTML5 Elements​</h1>​</hgroup>​<p>​"This is the global "<code>​<header>​</code>​" element for this page, including the "<code>​<hgroup>​</code>​" and "<code>​<nav>​</code>​" elements."</p>​<nav>​…​</nav>​</header>​, <header>​…​</header>​<h2>​Section header​</h2>​</header>​, <header>​…​</header>​<h3>​Article header​</h3>​</header>​]
$('header').click(function {
  $("this".css
VM2193:2 Uncaught SyntaxError: Unexpected token {
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)InjectedScript._evaluateOn @ VM655:895InjectedScript._evaluateAndWrap @ VM655:828InjectedScript.evaluate @ VM655:694
$('header').click(function {
  $('this'.css("background-color","lightgreen");
});
VM2370:2 Uncaught SyntaxError: Unexpected token {
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)InjectedScript._evaluateOn @ VM655:895InjectedScript._evaluateAndWrap @ VM655:828InjectedScript.evaluate @ VM655:694
$('header').click(function {
  $('this').css("background-color","lightgreen");
});
VM2371:2 Uncaught SyntaxError: Unexpected token {
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)InjectedScript._evaluateOn @ VM655:895InjectedScript._evaluateAndWrap @ VM655:828InjectedScript.evaluate @ VM655:694
$('header').click(function () {
  $('this').css("background-color","lightgreen");
});
[<header>​…​</header>​, <header>​…​</header>​, <header>​…​</header>​]
$('header').onclick(function () {
  $('this').css("background-color","lightgreen");
});
VM2428:2 Uncaught TypeError: $(...).onclick is not a function
    at <anonymous>:2:13
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)(anonymous function) @ VM2428:2InjectedScript._evaluateOn @ VM655:895InjectedScript._evaluateAndWrap @ VM655:828InjectedScript.evaluate @ VM655:694
$('header').click(function a () {
  $('this').css("background-color","lightgreen");
});
[<header>​…​</header>​, <header>​…​</header>​, <header>​…​</header>​]
a()
VM2447:2 Uncaught ReferenceError: a is not defined
    at <anonymous>:2:1
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)(anonymous function) @ VM2447:2InjectedScript._evaluateOn @ VM655:895InjectedScript._evaluateAndWrap @ VM655:828InjectedScript.evaluate @ VM655:694
a();
VM2456:2 Uncaught ReferenceError: a is not defined
    at <anonymous>:2:1
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)(anonymous function) @ VM2456:2InjectedScript._evaluateOn @ VM655:895InjectedScript._evaluateAndWrap @ VM655:828InjectedScript.evaluate @ VM655:694
$('h1').click(function () {
  $('this').css("background-color","lightgreen");
});
[<h1 class=​"highlight">​HTML5 Elements​</h1>​, <h1 class=​"highlight">​Header 1 <h1>​</h1>​, <h1>​My Picture​</h1>​, <h1>​My Picture​</h1>​]
$('img').click(function () {
  $('this').css("background-color","lightgreen");
});
[]
$('video').click(function () {
  $('this').css("background-color","lightgreen");
});
[<video src=​"HTML5-Elements_files/​a-new-computer-small.ogx" controls=​"controls" autobuffer height=​"300" width=​"400">​…​</video>​]
$('header').click(function () {
  $('header').css("background-color","lightgreen");
});
[<header>​…​</header>​, <header>​…​</header>​, <header>​…​</header>​]