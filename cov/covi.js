var co=new XMLHttpRequest();
co.open('GET','https://api.covid19api.com/summary',true);
co.send();
co.onload=function(){
    var data=JSON.parse(this.response);
    for(i=0;i<=192;i++){
        
        //console.log(data);
        console.log("date :"+data.Countries[i].Date+" "+data.Countries[i].Country+" "+"NewConfirmed:"+data.Countries[i].NewConfirmed+"total confirmed"+data.Countries[i].TotalConfirmed+
        " "+"NEW RECOVERED"+"    "+data.Countries[i].NewRecovered);

        
    }
}
//try":"Algeria","CountryCode":"DZ","Slug":"algeria","NewConfirmed":1927,"TotalConfirmed":167131,"NewDeaths":49,
//"TotalDeaths":4161,"NewRecovered":850,"TotalRecovered":112900,"Date":"2021-07-29T04:35:53.575Z","Premium":{}},{"ID":"11d573cc-48a0-4510-bd9a-