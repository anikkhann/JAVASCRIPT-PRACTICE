var brothersAge = [2, 4, 6, 8];
var ashikAge = brothersAge[3];
brothersAge[1]=3;
var position = brothersAge.indexOf(6);
console.log(position);
brothersAge.push(10);//push mane pechon theke element dhukano
console.log(brothersAge);
brothersAge.pop();//pop mane pechon theke element ber kora 
console.log(brothersAge);
brothersAge.unshift(1); //unshit() mane kono element samne  dhukano
console.log(brothersAge);
brothersAge.shift();//shift() mane kono element smne theke ber kora
console.log(brothersAge);
var part = brothersAge.slice(2, 4);//slice mane nirdrishto element kate fela
console.log(part);

