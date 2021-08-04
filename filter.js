var co=new XMLHttpRequest();
co.open('GET','https://restcountries.eu/rest/v2/all',true);
co.send();
co.onload=function(){
    var data=JSON.parse(this.response);
console.log(data)
var asia=data.filter((element)=>element.region==='Asia');
console.log(asia);
 var pop=data.filter((ele)=>ele.population<200000);
 console.log(pop);

 var rdata=data.filter((ele)=>{
     for(let i in ele.currencies){
         if(ele.currencies[i].code ==='USD'){
            return true;
         }
     }
 });
console.log(rdata);
var s=data.map((ele)=>{
    return (ele.population);
})
var a=s.reduce(function(acc,current){
    return acc+current;
});
console.log(a);
}
