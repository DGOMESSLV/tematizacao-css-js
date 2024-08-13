function cycleTheme () {
	const themes = ['light', 'dark'];  // Array com todos os nossos temas
	const currentTheme = localStorage.getItem('app-theme') || 'light';  // Pega o tema atual do localStorage, caso não haja, utiliza o light por padrão

	let nextTheme = themes.indexOf(currentTheme) + 1;

	if (nextTheme >= themes.length) {  // Se o próximo index do array não existir, volta ao inicio
		nextTheme = themes[0];
	} else {
		nextTheme = themes[nextTheme];
	}

	themes.forEach(theme => document.body.classList.remove(theme));  // Retira o tema atual do body

	// Adiciona o novo tema e atualiza o localStorage
	document.body.classList.add(nextTheme);
	localStorage.setItem('app-theme', nextTheme);
}