window.onload = function () {
	var skipLinks = document.createElement("div");
	skipLinks.innerHTML +=
		'<a class="skip-main" href="#content">Skip to Main Content</a>';
	skipLinks.innerHTML +=
		'<a class="skip-main" href="#footer">Skip to Footer</a>';
	document.body.insertBefore(skipLinks, document.body.firstChild);
};
