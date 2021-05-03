import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'

function FeedPage() {
    useProtectedPage()

    return (
        <div></div>
    );
}

export default FeedPage;