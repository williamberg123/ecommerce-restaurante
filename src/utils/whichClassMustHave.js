const whichClassMustHave = (hasAlreadyBeenOrdered, actuallyPage) => {
	let classMustHave = '';

	if (hasAlreadyBeenOrdered && actuallyPage === 'menu') {
		classMustHave = 'wasOrder';
	} else if (actuallyPage === 'order') {
		classMustHave = 'deleteOrder';
	} else {
		classMustHave = 'noWasOrder';
	}

	return classMustHave;
};

export default whichClassMustHave;
