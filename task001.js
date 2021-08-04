var cat = {
    // //     name: 'Fluffy',
    // //     activities: ['play', 'eat cat food'],
    // //     catFriends: [
    // //     {
    // //     name: 'bar',
    // //     activities: ['be grumpy', 'eat bread omblet'],
    // //     weight: 8,
    // //     furcolor: 'white'
    // //     }, 
    // //     {
    // //     name: 'foo',
    // //     activities: ['sleep', 'pre-sleep naps'],
    // //     weight: 3
    // //     }
    // //     ]
    // //    }
    // //    console.log(cat);
    // //    //1--Add height and weight to Fluffy
    // //    cat.height=20;
    // //    cat.width=30;
    // //    console.log(cat);
    // //    //2--Fluffy name is spelled wrongly. Update it to Fluffyy
    // //    cat.name='Fluffyy';
    // //   //3-- List all the activities of Fluffyy’s catFriends.
    // //    var ac=cat.catFriends[0].activities;
    // //    var ac2=cat.catFriends[1].activities;
    // //    console.log(ac);
    // //    console.log(ac2);
    // //    //4--Print the catFriends names
    // //    console.log(cat.catFriends[0].name);
    // //    console.log(cat.catFriends[1].name);
    // //    //5--Print the total weight of catFriends
    // //    var w1=cat.catFriends[0].weight;
    // //    var w2=cat.catFriends[1].weight;
    // //    console.log(w1+w2);
    // //    //6--Print the total activities of all cats (op:6)
    // //    var allac=(cat.catFriends[0].activities).length;
    // //    var allac2=(cat.catFriends[1].activities).length;
    // //    var allac3=(cat.activities).length;
    // //    console.log(allac+allac3+allac2);
    // //    //7--Add 2 more activities to bar & foo cats
    // //    cat.catFriends[0].activities[2]='run';
    // //    cat.catFriends[1].activities[2]='sleep'
    // //    console.log(cat);
    // //    //8--Update the fur color of bar
    // //    cat.catFriends[0].furcolor="red";
    // //    console.log( cat.catFriends[0].furcolor);
    // var myCar = {
    //     make: 'Bugatti',
    //     model: 'Bugatti La Voiture Noire',
    //     year: 2019,
    //     accidents: [
    //     {
    //     date: '3/15/2019',
    //     damage_points: '5000',
    //     atFaultForAccident: true
    //     },
    //     {
    //     date: '7/4/2022',
    //     damage_points: '2200',
    //     atFaultForAccident: true
    //     },
    //     {
    //     date: '6/22/2021',
    //     damage_points: '7900',
    //     atFaultForAccident: true
    //     }
    //     ]
    //    }
    //    //1. Loop over the accidents array. Change atFaultForAccident from true to false.
    //    var size=myCar.accidents.length;
    //    //for(var i=0;i<size;i++){
    //     //console.log(myCar.accidents[i]);
    //   // }
    //    //2. Print the dated of my accidents
    //    for(var i=0;i<size;i++){
    //     console.log(myCar.accidents[i].date);
    //    }
    //Write a function called “printAllValues” which returns an newArray of all the input object’s values.
    //Proble 1Write a function called “printAllValues” which returns an newArray of all the input object’s values.
    // var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
    // function printAllValues(obj) {
    //  // var arr=;
    
    //   return Object.values(obj);
    // }
    // //var ar=printAllValues(obj);
    // //console.log(printAllValues(obj));
    // console.log(printAllValues(obj));
    
    
    //proble2 Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
    // var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
    // function printAllValues(obj) {
    //  // var arr=;
    
    //   return Object.keys(obj);
    // }
    // //var ar=printAllValues(obj);
    // //console.log(printAllValues(obj));
    // console.log(printAllValues(obj));
    
    //3--Parsing an JSON object and convert it to a list:
    //Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
    // function convertObjectToList(obj) {
    //     // your code here
        
    //     var finalarray = [];
        
      
         
    //     for(var ele in obj){
    //        var outputarray = [];
    //       outputarray.push(ele);
    //       outputarray.push(obj[ele]);
    //       finalarray.push(outputarray);
    //     }
    //       console.log(finalarray);
    //     return finalarray;
    //   }
    
    
    //Parsing a list and transform the first and last elements of it:
    // Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
    // 1) the first element of the array as the object’s key, and
    // 2) the last element of the array as that key’s value.
    // var arr = ['GUVI', 'I', 'am', 'a geek'];
    // function transformFirstAndLast(arr) {
    //     var myObject = {
    //     [arr[0]]: arr[arr.length-1]
        
    //     }
    //     return myObject;
    // }
    
    // console.log(transformFirstAndLast(arr));
    
    
    //5--Parsing a list of lists and convert into a JSON object:
    // Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each //pair of elements in the array as a key-value pair.
    // var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
    // //console.log(arr[0][1]);
    // function fromListToObject(array) {
    
    //     var obj = {};
    //     var collection = array;
    //     for(var i = 0; i < array.length; i++){
    //       var dataArray =collection[i];
    //       for(var j= 0; j < collection[i].length; j++){
    //         obj[dataArray[0]] = dataArray[1]
    //       }
    //     }
    //     return obj;
    //   }
    // console.log(fromListToObject(arr));
    
    
    //6-->Parsing a list of lists and convert into a JSON object:
    //Write a function called “transformGeekData” that transforms some set of data from one format to another.
    
    // var arr= [[["firstName", 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
    // function transformEmployeeData(arraysample) {
    //     var result = [];
    
    //     // for(var i=0;i<arraysample.length;i++)
    //     // {  
    //     //  result[i] = {};
    //     //  for(var j=0;j<arraysample[i].length;j++)
    //     //   {
    //     //    result[i][arraysample[i][j][0]]=arraysample[i][j][1];
    //     //   }
    //     // }
       
    //    //both solution are right 
       
    //    // var result = arraysample.map(Object.fromEntries);
    
    //  return result;
    // }
    // console.log(transformEmployeeData(arr));
    
    //7--Parsing two JSON objects and Compare:
    // var expected = {foo: 5, bar: 6};
    
    // var actual = {foo: 5, bar: 6}
    
    // assertObjectsEqual(actual, expected, 'detects that two objects are equal');
    
    // // console output:
    
    // // passed
    
    // function assertObjectsEqual(actual, expected, testName) {
    //   // your code here
    //   //convert object to string.
    //   var actualString = JSON.stringify(actual);
    //   var expectedString = JSON.stringify(expected);
    //   if(actualString != expectedString) {
    //     console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    //   } else {
    //   console.log("passed");
    //   }
    // }
    
    
    
