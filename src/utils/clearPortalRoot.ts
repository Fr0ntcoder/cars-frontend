export const clearPortalRoot = () => {
	let parentElement = document.getElementById('portal') // Замените 'parentElementId' на ID вашего родительского элемента.

	// Удалите все дочерние элементы
	while (parentElement?.firstChild) {
		parentElement.removeChild(parentElement.firstChild)
	}
}
