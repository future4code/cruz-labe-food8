import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'

function RestaurantPage() {
    useProtectedPage()

    return (
        <div></div>
    );
}

export default RestaurantPage;