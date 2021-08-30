import React from 'react';
import {
    Wrapper,
    PlaceHolder
} from './styles'

interface ProfileImageProps {
    url?: string,
    initials?: string
}

const ProfileImage = ({ url, initials = "CÅ" }: ProfileImageProps) => {
    return (
        <Wrapper>
            {!url && <PlaceHolder>{initials}</PlaceHolder>}
        </Wrapper>
    )
}

export default ProfileImage;