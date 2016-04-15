jQuery
jQuery(selector, context)
jQuery(table,all)
VM375:2 Uncaught ReferenceError: all is not defined
    at <anonymous>:2:14
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)(anonymous function) @ VM375:2InjectedScript._evaluateOn @ VM292:895InjectedScript._evaluateAndWrap @ VM292:828InjectedScript.evaluate @ VM292:694
$('table')
[<table id=​"tblTasks">​…​</table>​<colgroup>​…​</colgroup>​<thead>​…​</thead>​<tbody>​…​</tbody>​</table>​]
$('td')
[<td>​Return library books​</td>​, <td>​…​</td>​<time datetime=​"2015-10-14">​2015-10-14​</time>​</td>​, <td>​Personal​</td>​, <td>​Perform project demo to stakeholders​</td>​, <td>​…​</td>​, <td>​Work​</td>​, <td>​Meet friends for dinner​</td>​, <td>​…​</td>​, <td>​Personal​</td>​]
$('[datetime]')
[<time datetime=​"2015-10-14">​2015-10-14​</time>​, <time datetime=​"2015-10-14">​2015-10-14​</time>​, <time datetime=​"2015-10-15">​2015-10-14​</time>​]
$('[datetime="2015-10-14])
VM627:2 Uncaught SyntaxError: Unexpected token ILLEGAL
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)InjectedScript._evaluateOn @ VM292:895InjectedScript._evaluateAndWrap @ VM292:828InjectedScript.evaluate @ VM292:694
$('[datetime="2015-10-14]')
[]
$('[datetime="2015-10-14"]')
[<time datetime=​"2015-10-14">​2015-10-14​</time>​, <time datetime=​"2015-10-14">​2015-10-14​</time>​]
$('[datetime!="2015-10-14"]')
[<html lang=​"en">​…​</html>​<head>​…​</head>​<body>​…​</body>​</html>​, <head>​…​</head>​, <meta charset=​"utf-8">​, <title>​Task list​</title>​, <link rel=​"stylesheet" type=​"text/​css" href=​"styles/​tasks.css" media=​"screen">​, <script src=​"scripts/​jquery-2.1.4.js">​</script>​, <body>​…​</body>​, <header>​…​</header>​, <span>​Task list​</span>​, <main>​…​</main>​, <section>​…​</section>​, <form>​…​</form>​, <div>​…​</div>​, <label>​Task​</label>​, <input type=​"text" required=​"required" name=​"task" class=​"large" placeholder=​"Breakfast">​, <div>​…​</div>​, <label>​Required by​</label>​, <input type=​"date" required=​"required" name=​"requiredBy">​, <div>​…​</div>​, <label>​Category​</label>​, <select name=​"category">​…​</select>​, <option value=​"Personal">​Personal​</option>​, <option value=​"Work">​Work​</option>​, <nav>​…​</nav>​, <a href=​"#">​Save task​</a>​, <a href=​"#">​Clear task​</a>​, <section>​…​</section>​, <table id=​"tblTasks">​…​</table>​, <colgroup>​…​</colgroup>​, <col width=​"50%">​, <col width=​"25%">​, <col width=​"25%">​, <thead>​…​</thead>​, <tr>​…​</tr>​, <th>​Name​</th>​, <th>​Due​</th>​, <th>​Category​</th>​, <tbody>​…​</tbody>​, <tr>​…​</tr>​, <td>​Return library books​</td>​, <td>​…​</td>​, <td>​Personal​</td>​, <tr class=​"even">​…​</tr>​, <td>​Perform project demo to stakeholders​</td>​, <td>​…​</td>​, <td>​Work​</td>​, <tr>​…​</tr>​, <td>​Meet friends for dinner​</td>​, <td>​…​</td>​, <time datetime=​"2015-10-15">​2015-10-14​</time>​, <td>​Personal​</td>​, <nav>​…​</nav>​, <a href=​"#">​Add task​</a>​, <footer>​You have 3 tasks​</footer>​]