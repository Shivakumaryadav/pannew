var co=new XMLHttpRequest();
co.open('GET','https://api.covid19api.com/stats',true);
co.send();
co.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data.stats);
}
