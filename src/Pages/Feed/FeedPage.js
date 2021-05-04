import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import {DivProducts} from './Styled'
import Search from '../../Components/Search/Search'

function FeedPage() {
    useProtectedPage()

   return (
        <div>
            <Search/>
            <DivProducts>

            </DivProducts>
        </div>
    );
}

export default FeedPage;