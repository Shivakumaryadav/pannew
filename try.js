var shhivaa=new XMLHttpRequest();
shhivaa.open('GET','https://restcountries.eu/rest/v2/all',true);
shhivaa.send();
shhivaa.onload=function(){
var data=JSON.parse(this.response);
for(var i=0;i<250;i++){
    console.log(data[i].name,data[i].capital);
}
}