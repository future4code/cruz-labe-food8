import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import CardRestaurant from '../../Components/RestaurantDetais/CardRestaurant'
function RestaurantPage() {
    useProtectedPage()

    return (
        <div>
            <CardRestaurant />
        </div>
    );
}

export default RestaurantPage;