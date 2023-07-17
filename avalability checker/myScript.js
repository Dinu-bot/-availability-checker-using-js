function clickHandler(event) {
	

	var checked = event.target.checked;

	
	if (checked) {
		dict[event.target.value] = { Checked: true };
		checkCount++;
	} else {
		dict[event.target.value] = { Checked: false };
		checkCount--;
	}

	

	
	Object.entries(dict).forEach(([key, value]) => {
		console.log(`${key}: ${value}`);
		var vehiclesByCategory = Array.from(
			document.querySelectorAll('.image-grid [data-cat="' + key + '"]')
		);
		
		if (vehiclesByCategory.length != 0) {
			console.log(value.Checked);
			console.log(vehiclesByCategory[0].hasAttribute('hidden'));
			console.log(vehiclesByCategory[0]);
			if (value.Checked) {
				if (vehiclesByCategory[0].hasAttribute('hidden')) {
					vehiclesByCategory.forEach(function (vehicle) {
						
						console.log('set');
						vehicle.removeAttribute('hidden');
					});
				}
			} else {
				vehiclesByCategory.forEach(function (vehicle) {
					
					vehicle.setAttribute('hidden', 'true');
				});
			
			}
		}

		
	});

	if (checkCount == 0) {
		var vehicles = Array.from(document.getElementById('img-grid').children);
		vehicles.forEach(function (vehicle) {
			vehicle.removeAttribute('hidden');
		});
	}
	
}

var checkboxes = document.querySelectorAll('input[name="cat-checkbox"]');

var dict = {
	car: { Checked: false },
	suv: { Checked: false },
	van: { Checked: false },
	min_bus: { Checked: false },
	bike: { Checked: false },
	tw: { Checked: false },
};

var checkCount = 0;

for (var i = 0; i < checkboxes.length; i++) {
	checkboxes[i].addEventListener('click', clickHandler);
}
