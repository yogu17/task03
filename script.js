var arr = [
    { "name" : "Queen" , "age" : "28"  } ,
    { "name" : "Rani" , "age" : "25"  } ,
   { "name" : "Barbie" , "age" : "22"  } 
 ];
 
 // for Loop :
 console.log("for loop:")
 for(let i=0;i<arr.length;i++){
     console.log(arr[i]["name"], arr[i]["age"]);
 }

 var object = {
     "Name" : "king" ,
     "Age" : "25" ,
     "year" : "2021"
 }
 
 // for in :
console.log("for in objects:")    // in objects
 for(let i in object){           
    console.log(i, object[i]);  
 }

 console.log("\n", "for in array of objects");     // in array of objects

 for(let i in arr){             
    console.log(arr[i]["name"], arr[i]["age"]);
 }

 console.log("\n");
console.log("for of:");
 // for of :
 for(i of arr){
    console.log(i["name"], i["age"]);
 }

 console.log("\n");
console.log("for each:");
 // for each :
 arr.forEach((e)=> {
     console.log(e["name"], e["age"]);    
 })

 //resume

 var resume = {
    "NAME" : "yogesh I" ,
    "FATHER'S NAME" : "B iyappan" ,
    "DATE OF BIRTH" : "01.01.1997" ,
    "EDUCATIONAL QUALIFICATION" : "bsc cs" ,
    "CURRENT STATUS (EDUCATION)" : "FULL-STACK DEVELOPER" ,
    "WORK EXPERIENCE" : "FRESHER" ,
    "LANGUAGE KNOWN" : "ENGLISH & TAMIL" ,
    "NATIONALITY" : "INDIAN" ,
    "ACADEMIC PERFORMANCE in SSC & sslc" : "83% & 67%", 
    "UG PERFORMANCE IN UG" : "65%" ,
}
for(var i in resume){
    console.log(i,":  "+resume[i]);
 }