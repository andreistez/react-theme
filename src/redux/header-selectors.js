export const getLogoFromState = state => {
	return state.header.logo
}

export const getMenuStructureFromState = state => {
	return state.header.menu
}

export const getPhoneFromState = state => {
	return state.header.phone
}

export const getButtonTextFromState = state => {
	return state.header.buttonText
}

export const getIsMobileMenuOpenFromState = state => {
	return state.header.isMobileMenuOpen
}