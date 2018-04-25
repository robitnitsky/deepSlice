let deepArr = [
	[1, 2],
	[3, 4],
	10,
	[5, 6]
]

function deepSlice(deepArr) {
	let newArr = [];
	if (Array.isArray(deepArr)) {
		deepArr.forEach(function(item, i) {
			newArr[i] = deepSlice(item);
		});
	}
	return newArr;
}

let newArr = deepSlice(deepArr);

// console.log('deepArr', deepArr);
// newArr[0][0] = 100;
console.log('newArr changed', newArr);
// console.log('deepArr', deepArr);