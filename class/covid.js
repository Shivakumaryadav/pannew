var co=new XMLHttpRequest();
co.open('GET','https://api.covid19api.com/summary',true);
co.send();
co.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    for(var i=0;i<20;i++){
     console.log("DATE :"+data.Countries[i].Date+" "+"NEW CONFIRMED CASES "+data.Countries[i].NewConfirmed+" "+data.Countries[i].);
}
}