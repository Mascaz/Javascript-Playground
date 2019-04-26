var myArray = [];

var i = 0;

while(i < 5)
{
    myArray.push(i);
    i++;
}

console.log(myArray);

myArray = [];

for (var i = 1; i <= 5; i++)
{
    myArray.push(i);
}

console.log(myArray);

//Looping through an array
var newArray = [9, 10, 11, 12];
var total = 0;

for (var i = 0; i < newArray.length; i++)
{
    total += newArray[i];
}

console.log(total);