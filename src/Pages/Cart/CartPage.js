import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'


function CartPage() {
    useProtectedPage()

    return (
        <div></div>
    );
}

export default CartPage;