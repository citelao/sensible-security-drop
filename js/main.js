const menu_button = document.getElementById("menu_button");
const nav = document.getElementById("main_nav");

if(menu_button) {
	menu_button.onclick = function()
	{
		const is_active = (menu_button.getAttribute("aria-checked") == "true");

		menu_button.setAttribute("aria-checked", !is_active);

		if(is_active) {
			main_nav.classList.remove("active");
		} else {
			main_nav.classList.add("active");
		}
	}
}