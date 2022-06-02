const removeDuplicateItems = (arrayOfObjects) => {
	const outDuplicates = [];

	for (const obj of arrayOfObjects) {
		const index = outDuplicates.findIndex(({ menuname }) => menuname === obj.menuname);
		if (index === -1) {
			outDuplicates.push(obj);
		}
	}

	return outDuplicates;
};

export default removeDuplicateItems;
