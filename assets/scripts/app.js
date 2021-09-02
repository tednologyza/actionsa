const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Transparency",
				weight: 12.3
			}, {
				text: "Service delivery",
				weight: 8
			}, {
				text: "Communities first",
				weight: 14
			}, {
				text: "South Africans first",
				weight: 3
			}, {
				text: "Working together",
				weight: 7
			}, {
				text: "Transparency",
				weight: 10
			}, {
				text: "actionSA",
				weight: 9
			}, {
				text: "City of Johannesburg ward 56",
				weight: 15
			}, {
				text: "Vote for Nicole Johnson",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

}
