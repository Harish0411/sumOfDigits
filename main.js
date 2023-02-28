// sum of the digits

var a= Number(prompt("Enter any number to find sum of digits"));
var b=0;

while(a>0){
  c=a%10;
  a=(a-c)/10;
  b+=c;
}
console.log(b);