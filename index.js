function fez(options) {
	// DOM Ready
	document.addEventListener(
		"DOMContentLoaded",
		function() {
			// Declare top event
			var fezTop = new Event("fezTop");

			// Declare not top event
			var fezNotTop = new Event("fezNotTop");

			// Set up the variables
			var body = document.body,
				otherElements = document.body.querySelectorAll(
					options.additionalElements
				),
				elements = [body],
				classes = {
					top: "fez-top",
					notTop: "fez-not-top"
				};

			// Add addtional elements if they exist
			if (otherElements.length) {
				for (var i = 0; i < otherElements.length; i++) {
					elements.push(otherElements[i]);
				}
			}

			// Indicate at top of page when loaded
			for (var i = 0; i < elements.length; i++) {
				elements[i].classList.add(classes.top);
			}

			// Event listener for at top of page
			document.addEventListener(
				"fezTop",
				function(e) {
					for (var i = 0; i < elements.length; i++) {
						elements[i].classList.remove(classes.top);
						elements[i].classList.add(classes.notTop);
					}
				},
				false
			);

			// Event listener for not at top of page
			document.addEventListener(
				"fezNotTop",
				function(e) {
					for (var i = 0; i < elements.length; i++) {
						elements[i].classList.remove(classes.notTop);
						elements[i].classList.add(classes.top);
					}
				},
				false
			);

			// Scroll event listener
			window.addEventListener("scroll", function(body) {
				//Get the vertical scroll position
				scrollPosition = window.scrollY;

				// Statement to toggle classes to indicate if at top of page, where the offset is defined.
				if (scrollPosition >= options.offset) {
					document.dispatchEvent(fezTop);
				} else {
					document.dispatchEvent(fezNotTop);
				}
			});
		},
		false
	);
}
