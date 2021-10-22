import React from 'react'
import styled from 'styled-components'


const PrimaryPostTag = ({ postTag }) => {
    return <PostTagWrapper>{postTag}</PostTagWrapper>
}


export default PrimaryPostTag


const PostTagWrapper = styled.div`
    color: rgb(119, 175, 239);
    font-family: Qanelas-Bold;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.44px;
    text-transform: uppercase;
`