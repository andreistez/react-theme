export const getVisibilityFromState = ( state ) => {
	return state.fastOrder.isVisible
}

export const getResponseMessageFromState = ( state ) => {
	return state.fastOrder.responseMessage
}

export const getResponseMessageVisibilityFromState = ( state ) => {
	return state.fastOrder.responseMessageVisibility
}