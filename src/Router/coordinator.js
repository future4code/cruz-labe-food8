export const goToLogin = (history) => {
    history.push('/login')
}

export const goToRegister = (history) => {
    history.push('/signup')
}

export const goToFeed = (history) => {
    history.push('/feed')
}

export const goToRestaurant = (history, restaurantId) => {
    history.push(`/feed/${restaurantId}`)
}

export const goToProfile = (history) => {
    history.push('/profile')
}

export const goToProfileAddressEdit = (history) => {
    history.push('/profile/address')
}

export const goToProfileNameEdit = (history) => {
    history.push('/profile/name')
}

export const goToCart = (history) => {
    history.push(`/cart`)
}

export const goToLastPage = (history) => {
    history.goBack()
}