import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../GlobalState/GlobalStateContext'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import Feed from '../../Components/Feed/Feed'
import axios from 'axios'
import { useHistory } from 'react-router'
import {token} from '../../Constants/urls'
import Loading from '../../Components/Loading/Loading'

function FeedPage() {
    useProtectedPage()
    let { states } = useContext(GlobalStateContext)
    const restaurants = states && states.restaurants

    return (
        <div>
            {token ?
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