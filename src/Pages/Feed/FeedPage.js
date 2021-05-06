import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../GlobalState/GlobalStateContext'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import Search from '../../Components/Search/Search'

import axios from 'axios'
import { useHistory } from 'react-router'

function FeedPage() {
    useProtectedPage()
    let { states, requests } = useContext(GlobalStateContext)
    const restaurants = states && states.restaurants
    const history = useHistory()

    return (
        <div>
            {restaurants ?
                <>
                    <Search 
                    restaurants={restaurants}
                    />
                </>
                : <p>Carregando...</p>
            }
        </div>
    );
}

export default FeedPage;