import React from 'react'
import styled from 'styled-components'
import ClockIcon from 'src/assets/svg/clock.svg'


const ReadingTime = ({ time }) => {
    return (<PostReadingTime>
                <ClockIconWrapper><ClockIcon /></ClockIconWrapper>
                <TimeCopy>{`${time} min read`}</TimeCopy>
            </PostReadingTime>)
}


export default ReadingTime




const PostReadingTime = styled.div`
    display: flex;
    align-items: center;
    color: rgba(255,255,255,0.5);
`

const ClockIconWrapper = styled.div`
    margin-right: 10px;
    svg {
        width: 16px;
        fill: rgba(255,255,255,0.5);
    }
`

const TimeCopy = styled.div`
    padding-bottom: 4px;
`