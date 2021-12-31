var items=[["veg Biryani",100],["chicken Biryani",200],["egg fried rice",75]];
 for(var i=0;i<items.length;i++)
 {
  var div= document.createElement("div");
  div.className = "itembox-style";
  div.id="item"+i;
  var h2 = document.createElement("h2");
  var br = document.createElement("br");
  var par =document.createElement("p");
  var t = document.createTextNode(items[i][0]);
  var p = document.createTextNode(items[i][1]);
  h2.appendChild(t);
  par.appendChild(p);
  div.appendChild(h2);
  div.appendChild(par);
  div.setAttribute("draggable", "true");
  div.setAttribute('ondragstart','onDragStart(event)');
  document.getElementById("menu").appendChild(div);
  document.getElementById("menu").appendChild(br);
 }
 function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchitems");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("itembox-style");
  
    for (i = 0; i < ul.length; i++) {
        a = ul[i].getElementsByTagName("h2")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ul[i].style.display = "";
        } else {
            ul[i].style.display = "none";
        }
    }
}
function calculateTotal(id) {
  var c=id.toString()
  console.log(c[0]+c[1]);
  var r=document.getElementById(id).value-tables[Number(c[1])]['itemsList'][Number(c[0])]['count'];
  if(r<0)
  {
  tables[Number(c[1])]['total'] -= Math.abs(r)*tables[Number(c[1])]['itemsList'][Number(c[0])]['price'];
  tables[Number(c[1])]["tcount"] -=  Math.abs(r);
  }
  else
  {
    tables[Number(c[1])]['total'] += r*tables[Number(c[1])]['itemsList'][Number(c[0])]['price'];
    tables[Number(c[1])]["tcount"] +=  r;
  }
  tables[Number(c[1])]['itemsList'][Number(c[0])]['count']=document.getElementById(id).value
  document.getElementById("final").innerHTML="TOTAL"+tables[Number(c[1])]['total'];
  document.getElementById(id).default=tables[Number(c[1])]['itemsList'][Number(c[0])]['count'];
  document.getElementById(c[1]).getElementsByTagName('p')[0].innerHTML = "Rs :"+tables[Number(c[1])]["total"]+"| TotalItems :"+tables[Number(c[1])]["tcount"];

 }
 function deleteItem(id) {
  var c=id.toString()
  var r=tables[Number(c[2])]['itemsList'][Number(c[0])]['count'];

  tables[Number(c[2])]['total'] -= r*tables[Number(c[2])]['itemsList'][Number(c[0])]['price'];
  tables[Number(c[2])]["tcount"] -=  r;
  
  document.getElementById(c[2]).getElementsByTagName('p')[0].innerHTML = "Rs :"+tables[Number(c[2])]["total"]+"| TotalItems :"+tables[Number(c[2])]["tcount"];
   openModal(c[2])
  console.log(c[0]+c[1]+c[2]);
 }
var tables =[{"name":"Table-1","itemsList":[],"total":0,'tcount':0},{"name":"Table-2","itemsList":[],"total":0,'tcount':0},{"name":"Table-3","itemsList":[],"total":0,'tcount':0}];
for(var i=0;i<tables.length;i++)
 {
  var div= document.createElement("div");
  div.className = "tablebox-style";
  div.id=i;
  var h2 = document.createElement("h2");
  var br = document.createElement("br");
  var par =document.createElement("p");
  var t = document.createTextNode(tables[i]["name"]);
  var p = document.createTextNode("Rs :"+tables[i]["total"]+"| TotalItems :"+tables[i]["tcount"]);
  h2.appendChild(t);
  par.appendChild(p);
  div.appendChild(h2);
  div.appendChild(par);
  div.setAttribute('ondrop','onDrop(event)');
  div.setAttribute('ondragover','allowDrop(event)');
  document.getElementById("table").appendChild(div);
  document.getElementById("table").appendChild(br);
  
  document.getElementById(i).setAttribute('onclick','openModal(this.id)');
 }

  function myFunction1() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchtable");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("tablebox-style");
  
    for (i = 0; i < ul.length; i++) {
        a = ul[i].getElementsByTagName("h2")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ul[i].style.display = "";
        } else {
            ul[i].style.display = "none";
        }
    }
}
console.log(tables[0]["itemsList"]);
var itemName;var itemPrice;
function onDragStart(ev){
var ele = document.getElementById(ev.target.id);
 itemName=ele.getElementsByTagName('h2')[0].innerHTML;
 itemPrice=ele.getElementsByTagName('p')[0].innerHTML;

 console.log(tables[0]["itemsList"]);
}
function allowDrop(ev) {
  ev.preventDefault();
}
function onDrop(ev){
  console.log(tables[0]["itemsList"]);
  var Id=ev.target.id;
  
  let p=0;
  for(var i=0;i<tables[Id]['itemsList'].length;i++)
  {
    if(tables[Id]['itemsList'][i]['name']==itemName)
    {
    tables[Id]['itemsList'][i]['count'] += 1;
     tables[Id]['tcount'] += 1;
     tables[Id]['total'] += tables[Id]['itemsList'][i]['price'];
          p=1;
          break;
    }
  }
  if((p==0)||tables[Id]['itemsList'].length == 0)
  {
    console.log(tables[0]["itemsList"]);
    tables[Id]['tcount'] += 1;
    tables[Id]['total'] += Number(itemPrice);
         tables[Id]['itemsList'].push({'name':itemName,'price':Number(itemPrice) ,"count":1});
  }
  document.getElementById(Id).getElementsByTagName('p')[0].innerHTML = "Rs :"+tables[Id]["total"]+"| TotalItems :"+tables[Id]["tcount"];
  console.log(tables[0]["itemsList"]);
}
//tables[0].items.push(["biryani",50]);
//document.getElementById("demo").innerHTML =tables[0]["items"];
const modal = document.querySelector('#my-modal');
//const modalBtn = document.querySelector('.itembox-style');
const closeBtn = document.querySelector('.close');

// Events
//modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal(j) {
  
  document.getElementById("mb").innerHTML="<tr><th>S.NO</th><th>name</th><th>price</th><th>no of servings</th><th>delete-item</th></tr>";

  
  var j=Number(j);
 
  modal.style.display = 'block';
  var mb=document.getElementById(mb);

  document.getElementById("header").innerHTML = "Table "+(j+1)+" |Order details";

  var h = document.getElementById("mb");
  for(var i =0;i<tables[j]['itemsList'].length;i++)
  { 
    
    var tr= document.createElement("tr");
    var td1= document.createElement("td");
    var td2= document.createElement("td");
    var td3= document.createElement("td");
    var td4= document.createElement("td");
    var td4= document.createElement("td");
    var td5= document.createElement("td");
    var noofitems = document.createElement("input");
     noofitems.type = "number";
     noofitems.setAttribute("value", tables[j]['itemsList'][i]['count']);
     noofitems.id=i+""+j;  
     noofitems.setAttribute("value", tables[j]['itemsList'][i]['count']);
     noofitems.id=i+""+j;
     var del = document.createElement("button");
     del.id=i+"d"+j;
    
    var t1 = document.createTextNode(i+1);
    var t2 = document.createTextNode(tables[j]['itemsList'][i]['name']);
    var t3= document.createTextNode(tables[j]['itemsList'][i]['price']);
    td1.appendChild(t1);
    td2.appendChild(t2);
    td3.appendChild(t3);
    td4.appendChild(noofitems);
    td5.appendChild(del);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    document.getElementById("mb").appendChild(tr);

    document.getElementById(noofitems.id).setAttribute('onclick','calculateTotal(this.id)');
    document.getElementById(del.id).setAttribute('onclick','deleteItem(this.id)');
 }
 document.getElementById("final").innerHTML="TOTAL"+tables[j]['total'];
 comsole.log(tables[j]['total']);
}
// Close
function closeModal() {
  modal.style.display = 'none';
  document.getElementById("mb").innerHTML="";
}
// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    document.getElementById("mb").innerHTML="";
  }
}