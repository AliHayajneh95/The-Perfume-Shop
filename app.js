console.log("aaaaa");

function Perfume(name, quantity, price) 
{
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

var perfumes = new Array();

var body = document.getElementById("b");
var form = document.getElementById("myform");

form.addEventListener("submit", function (event)
{
    event.preventDefault();

    var perfume = new Perfume(event.target.name.value, event.target.quantity.value,
        Math.floor(Math.random() * (270 - 120 + 1)) + 120);
    perfumes.push(perfume);

    localStorage.setItem("perfumes", JSON.stringify(perfumes));
    var retrievedData = localStorage.getItem("perfumes");
    

    var tr = document.createElement("tr");
    var td = document.createElement("td");

    var tn = document.createTextNode(event.target.name.value);
    td.appendChild(tn);
    tr.appendChild(td);

    tn = document.createTextNode(event.target.quantity.value);
    td = document.createElement("td");
    td.appendChild(tn);
    tr.appendChild(td);

    var x = Number(perfume.price) * Number(event.target.quantity.value);
    tn = document.createTextNode(x);
    td = document.createElement("td");
    td.appendChild(tn);
    tr.appendChild(td);

    tn = document.createTextNode("X");
    td = document.createElement("td");
    td.appendChild(tn);
    tr.appendChild(td);

    table.appendChild(tr);
});

var table = document.createElement("table");
var legend = document.createElement("Legend");
var tn = document.createTextNode("My Perfumes List");
var h2 = document.createElement("h2");
h2.appendChild(tn);
legend.appendChild(h2);
table.appendChild(legend);

var tr = document.createElement("tr");


var th = document.createElement("th");
tn = document.createTextNode("Perfume");
th.appendChild(tn);
tr.appendChild(th);

th = document.createElement("th");
tn = document.createTextNode("Quantity");
th.appendChild(tn);
tr.appendChild(th);

th = document.createElement("th");
tn = document.createTextNode("Price");
th.appendChild(tn);
tr.appendChild(th);

th = document.createElement("th");
tn = document.createTextNode("Remove");
th.appendChild(tn);
tr.appendChild(th);

table.appendChild(tr);
body.appendChild(table);