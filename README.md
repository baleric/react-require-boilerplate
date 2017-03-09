# react-require-boilerplate

<strong>Started my own react boiler plate.</strong>
<br>
JS is dynamically loaded across the entire platform based on tags on the page.

&lt;body data-controller="jsforpage"><br>
<i>/js/views/jsforpage.js</i>

&lt;div data-template="header"><br>
<i>/js/template/header.js</i>
 
&lt;div data-component="income/weekly"><br>
<i>/js/componenets/income/weekly.js</i>

&lt;div data-component="income/weekly" data-url="jsonGet.html"><br>
<i>passes ajax url directly to component for re-use with different data</i>
<br><br><br>
Will set up gulp scripts soon.
