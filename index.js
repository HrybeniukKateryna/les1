/*function filter(arr, callback) {
const newArr = [];

for(let i = 0; i<arr.length; i++) {
   const elem = callback(arr[i], i, arr);

   if (elem !== undefined) {
        newArr.push(elem);
    }
}

return newArr;
}
const numbers = [1, 2, 3, 4, 5, -1, -234234, -234, 5325, 999, 997];

const result = filter( numbers, function (kate) {
    if(kate >= 5 && kate <=1000) {
        return kate;
    }
});

console.log(result);
*/






/*const arr = [12, 13, 423,23, 12];

const result = arr.some(function (item) {
    return item ===12;
});

console.log(result); 

const arr = [12, 13, 423,23, 12];

const result = arr.every(function (item) {
    return item === 'number';
});

console.log(result);

*/

//const arr = [1, 2, 3, 4, 5];
/*let sum =0;
for (let i = 0; i < arr.length; i++) {
    summ =+arr;
} */

/*------
const stud = [
    {name: 'sfg',
    rating: 7},

    {name: 'fsg',
    rating: 5
    }
];

const result = stud.reduce(function(prev,curr) {
    return prev + curr.rating;
    // return `${prev} ${curr.name}; }, '');  - for string
}, 0);
console.log(result);
*/

/*console.log(string.split(' '));

console.log(string.join(' ')); */

let string = 'Lorem ipsum, dolor sit amet consectetur fuck adipisicing elit. Voluptates mollitia labore, tempora suck dolorum, molestias commodi quis aspernatur officiis ipsum, maxime beatae necessitatibus id velit harum aliquam qui illum repudiandae optio?'


function someFunc(string) {
    let result = string.split(' ');

    let some = result.filter(function (item) {
        if (item !== 'fuck' && item !== 'suck') {
            return item;
        }
    });
    // return result.join(' ');
    let secRes = some.join(' ');
    return secRes;
}

const res = someFunc(string);
console.log(res);











