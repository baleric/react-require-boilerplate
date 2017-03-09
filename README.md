# react-require-boilerplate

<strong>Started my own react boiler plate.</strong>
<br>
JS is dynamically loaded across the entire platform based on tags on the page.

&lt;body data-controller="jsforpage">
##/js/views/jsforpage.js##

&lt;div data-template="header">
##/js/template/header.js##
 
&lt;div data-component="income/weekly">
##/js/componenets/income/weekly.js##

&lt;div data-component="income/weekly" data-url="jsonGet.html">
##passes ajax url directly to component for re-use with different data.##

Will set up gulp scripts soon.
