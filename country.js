console.log("1.compare 2 JSON have same properties")
var obj1={name:"Person 1",age : 5};
var obj2={age : 5,name:"Person 1"};
console.log(obj1===obj2)

var request = new XMLHttpRequest()
url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

request.open("GET",url)
request.send()
console.log(request);
request.onload = function(){
var data = JSON.parse(request.response);
console.log(data)
console.log('2-countries flag')
for(i=0;i<data.length;i++){
     console.log(data[i].flag)
     
}
    console.log('3-countries name, region,subregion, population ')
    for(i=0;i<data.length;i++){
     console.log(data[i].name)
     console.log(data[i].region)
     console.log(data[i].subregion)
     console.log(data[i].population)
 }


}
 