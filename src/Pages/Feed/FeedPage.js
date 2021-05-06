import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../GlobalState/GlobalStateContext'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import Feed from '../../Components/Feed/Feed'
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
                    <Feed
                        restaurants={restaurants}
                    />
                </>
                : <p>Carregando...</p>
            }
        </div>
    );
}

export default FeedPage;