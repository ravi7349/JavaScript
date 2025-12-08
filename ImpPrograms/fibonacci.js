var a = 0;
var b = 1;
var n  = 5;
var count = 0;
while(count<n)
{
  console.log(a);
  c = a+b;
  a = b;
  b = c;
  count+=1;
}