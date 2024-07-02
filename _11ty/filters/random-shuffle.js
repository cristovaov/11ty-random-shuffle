const shuffle = function (array) {
	const copiedArray = [...array];
	
	// Loop through the array starting from the last element and moving backwards.
	for (let index = copiedArray.length - 1; index > 0; index--) {
		// Generate a random index from 0 to currentIndex (inclusive)
		const randomIndex = Math.floor(Math.random() * (index + 1));

		// Swap the elements at currentIndex and randomIndex
		const temp = copiedArray[index];
		copiedArray[index] = copiedArray[randomIndex];
		copiedArray[randomIndex] = temp;
	}

	return copiedArray;
}

module.exports = { shuffle };
