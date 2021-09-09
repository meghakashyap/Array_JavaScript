var name=["m","o","m"];
var empty = [];
var check_palin= name;
for (var i=name.length-1; i>=0 ; i--){
    empty.push(name[i])
}

for (var j=0; j<empty.length; j++){
    if (empty[j] === check_palin[j]){
        var check = ("Its a Palindrome");
    }
    else{
        var check = ("Not a Palindrome");
    }  
}
console.log(check)

