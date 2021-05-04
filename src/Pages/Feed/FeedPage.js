import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import Search from '../../Components/Search/Search'

function FeedPage() {
    useProtectedPage()

    return (
        <div>
            <Search />
        </div>
    );
}

export default FeedPage;