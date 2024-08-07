const homeWindow = document.querySelector(".home-window");
const tabNavMenu = document.querySelector(".tab-navigation-menu");
const toolbar = document.querySelector(".toolbar");
const startButton = document.getElementById("start-btn");
const deskbarMenu = document.getElementById("deskbar-menu");

// Function to load the HTML file and set its content as innerHTML of the div
function loadHTML(iPageUrl, iPagejs) {
	
	// for GitHub
	// Delete these two variables and give the name of these variables to the arguments of loadHTML
	let pageUrl = 'https://raw.githubusercontent.com/Nikhil-sha/Windows-clone-in-html/main' + iPageUrl;
	let pagejs = 'https://raw.githubusercontent.com/Nikhil-sha/Windows-clone-in-html/main' + iPagejs;
	
	fetch(pageUrl)
		.then(response => response.text())
		.then(data => {
			homeWindow.innerHTML = data;
			tabNavMenu.style.display = (iPageUrl === "/pages/application-drawer.html") ? "none" : "block";
			toolbar.style.display = (iPageUrl === "/pages/application-drawer.html") ? "none" : "block";

			if (pagejs) {
				// Remove existing script if present
				const existingScript = document.getElementById("page-script");
				if (existingScript) {
					existingScript.parentNode.removeChild(existingScript);
				}

				// Create a new script element
				const script = document.createElement('script');
				script.src = pagejs;
				script.async = true; // Load the script asynchronously
				script.id = "page-script";
				document.head.appendChild(script);
			}
		})
		.catch(error => {
			homeWindow.innerHTML = `<center><p>Error<br />${error}</p></center>`;
		});
}

// Toggle function for the start button
function startButtonAction() {
	document.querySelector(".start-window").classList.toggle('start-window-opened');
}

// Toggle function for the deskbar menu
function deskbarMenuAction() {
	document.querySelector(".deskbar-menu-dialog-box").classList.toggle('deskbar-menu-dialog-box-opened');
}

// Add event listeners to buttons
startButton.addEventListener('click', startButtonAction);
deskbarMenu.addEventListener('click', deskbarMenuAction);

// Initial homepage load
loadHTML('/pages/application-drawer.html');