console.log("my name is Ali")
function output(line:number){
for (var i=1;i<=line;i++){
    var k =""

    for (var s=1;s<=line - i;s++){
        k+=" "
    }

    for(var j=1;j<=2*i-1;j++){

        k+="*"
           
    }
    console.log(k) 

}}

output(5)