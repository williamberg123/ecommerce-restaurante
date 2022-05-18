const removeDuplicateItems = (arrayOfObjects) => {
	const copyOfArray = arrayOfObjects;

	for (const obj of arrayOfObjects) {
		copyOfArray.forEach((item, index) => {
			if (!(index === arrayOfObjects.indexOf(obj))) {
				if (obj.menuname === item.menuname) {
					copyOfArray.splice(index, 1);
				}
			}
		});
	}

	return copyOfArray;
};

export default removeDuplicateItems;
