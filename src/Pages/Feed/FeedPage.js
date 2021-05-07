import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../GlobalState/GlobalStateContext'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import Feed from '../../Components/Feed/Feed'
import axios from 'axios'
import { useHistory } from 'react-router'
import Loading from '../../Components/Loading/Loading'

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
                : <Loading/>
            }
        </div>
    );
}

export default FeedPage;