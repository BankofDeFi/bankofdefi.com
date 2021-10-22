import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


import ArrowIcon from 'src/assets/svg/left-arrow.svg'


const PostPagination = ({ nextPostSlug, prevPostSlug }) => {
    const disabledNext = nextPostSlug ? "" : "disabled-link"
    const disabledPrev = prevPostSlug ? "" : "disabled-link"

    
    return (
        <PostPaginationWrapper>
            <Link 
                to={`/news/${nextPostSlug ? nextPostSlug.slug : '/'}`}
                className={`button ${disabledNext}`}
                >
                <PreviousPost><ArrowIcon />Prev</PreviousPost>
            </Link>

            <Link 
                to={`/news/${prevPostSlug ? prevPostSlug.slug : '/'}`}
                className={`button ${disabledPrev}`}
            >
                <NextPost>Next<ArrowIcon /></NextPost></Link>
        </PostPaginationWrapper>
    )
}



export default PostPagination

const PostPaginationWrapper = styled.div`
    display: flex;
    padding: 3% 0;
    justify-content: space-between;
    border-top: 1px solid rgba(104, 104, 104, 0.3);
    svg {
        fill: #fff;
        width: 16px;
        margin: 0 6px;
    }

    a {
        text-decoration: none;
    }

    .disabled-link {
        pointer-events: none;
        opacity: 0.2;
    }
`




const PreviousPost = styled.div`
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    font-family: Qanelas-Bold;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0px;
    display: flex;
    align-content: center;
`

const NextPost = styled.div`
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    font-family: Qanelas-Bold;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0px;
    display: flex;
    align-content: center;
    
    svg {
        transform: rotate(180deg);
    }
`