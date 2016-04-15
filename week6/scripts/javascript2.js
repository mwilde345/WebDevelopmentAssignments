$('[data-priority="high"]')
[<time datetime=​"2015-10-14" data-priority=​"high">​2015-10-14​</time>​]
$('.large')
[<input type=​"text" required=​"required" name=​"task" class=​"large" placeholder=​"Breakfast">​]
$('#tblTasks')
[<table id=​"tblTasks">​…​</table>​]
$('tr : first')
jquery-2.1.4.js:1458 Uncaught Error: Syntax error, unrecognized expression: tr : first
    at Function.Sizzle.error (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:1458:8)
    at Sizzle.tokenize (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:2075:11)
    at Sizzle.select (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:2479:20)
    at Function.Sizzle (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:855:9)
    at jQuery.fn.extend.find (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:2695:11)
    at jQuery.fn.init (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:2803:38)
    at jQuery (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:76:10)
    at <anonymous>:2:1
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)Sizzle.error @ jquery-2.1.4.js:1458Sizzle.tokenize @ jquery-2.1.4.js:2075Sizzle.select @ jquery-2.1.4.js:2479Sizzle @ jquery-2.1.4.js:855jQuery.fn.extend.find @ jquery-2.1.4.js:2695jQuery.fn.init @ jquery-2.1.4.js:2803jQuery @ jquery-2.1.4.js:76(anonymous function) @ VM1071:2InjectedScript._evaluateOn @ VM932:895InjectedScript._evaluateAndWrap @ VM932:828InjectedScript.evaluate @ VM932:694
$('tr:first')
[<tr>​…​</tr>​]
$('tr:eq(1)') //because they are stored as array elements. 2nd row.
[<tr>​…​</tr>​]
$('tr:second')
jquery-2.1.4.js:1458 Uncaught Error: Syntax error, unrecognized expression: unsupported pseudo: second
    at Function.Sizzle.error (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:1458:8)
    at Sizzle.selectors.filter.PSEUDO (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:1765:13)
    at matcherFromTokens (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:2308:44)
    at Sizzle.compile (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:2450:13)
    at Sizzle.select (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:2536:16)
    at Function.Sizzle (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:855:9)
    at jQuery.fn.extend.find (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:2695:11)
    at jQuery.fn.init (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:2803:38)
    at jQuery (file:///E://4350/week06/tasks01/scripts/jquery-2.1.4.js:76:10)
    at <anonymous>:2:1Sizzle.error @ jquery-2.1.4.js:1458Sizzle.selectors.filter.PSEUDO @ jquery-2.1.4.js:1765matcherFromTokens @ jquery-2.1.4.js:2308Sizzle.compile @ jquery-2.1.4.js:2450Sizzle.select @ jquery-2.1.4.js:2536Sizzle @ jquery-2.1.4.js:855jQuery.fn.extend.find @ jquery-2.1.4.js:2695jQuery.fn.init @ jquery-2.1.4.js:2803jQuery @ jquery-2.1.4.js:76(anonymous function) @ VM1473:2InjectedScript._evaluateOn @ VM932:895InjectedScript._evaluateAndWrap @ VM932:828InjectedScript.evaluate @ VM932:694
$('tr:gt(0)') //rows whose indices are greater than 0
[<tr>​…​</tr>​, <tr class=​"even">​…​</tr>​, <tr>​…​</tr>​]
$('tr:even')
[<tr>​…​</tr>​<th>​Name​</th>​<th>​Due​</th>​<th>​Category​</th>​</tr>​, <tr class=​"even">​…​</tr>​]


$('vvvv')
[]
$('adf')
[]
$('<h1>Now is the time</h1>').insertBefore('label')
[<h1>​Now is the time​</h1>​, <h1>​Now is the time​</h1>​, <h1>​Now is the time​</h1>​]

//changes html until page refresh?.....

$('<video width = "380" height= "240" controls></video>').insertBefore('label')
[<video width=​"380" height=​"240" controls>​</video>​, <video width=​"380" height=​"240" controls>​</video>​, <video width=​"380" height=​"240" controls>​</video>​]
$('select')
[<select name=​"category">​<option value=​"Personal">​Personal​</option>​<option value=​"Work">​Work​</option>​</select>​]
$('select').val()
"Personal"
$('select').val('Captain Crunch')
[<select name=​"category">​…​</select>​]
$('select').html()


//he asked a question and i had the ansurrrrr~~~~~~~~~~~~~~~
