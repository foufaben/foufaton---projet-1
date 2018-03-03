function clicki() {

 var pr= prompt("votre message "," made with love");
 //document.getElementById("demo").innerHTML = pr ;
$("#demo").html(pr);

}

function eat(){
	
//var para = document.createElement("p");
//var node = document.createTextNode("this is new");
//console.log("TEST");
//para.appendChild(node);
//console.log(para);


//var element = document.getElementById("div1");
//element.appendChild(para);


$("#div1").append("<p>this is new");
}
function badilattribute(){

$("#p1").attr("hidden","true");

}
function badilcss (){
	//var element=document.getElementById("p2").style.margin = "50%"; 
	$("#p2").css({"margin":"50%"});
}
