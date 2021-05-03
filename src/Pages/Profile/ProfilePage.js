import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'


function ProfilePage() {
    useProtectedPage()

    return (
        <div></div>
    );
}

export default ProfilePage;