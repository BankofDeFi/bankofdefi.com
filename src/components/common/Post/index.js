import React from 'react'
import styled from 'styled-components'



const Post = ({ postHeader, postSubheader, children }) => {
    return (
    <PostWrapper>
        {children}
    </PostWrapper>
    )
}


export default Post


const PostWrapper = styled.section`
    padding: 2% 5%;
    max-width: 800px;
    margin: 0 auto;

    p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 16px;
        font-family: Qanelas-Medium;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 24px;

        span {
            font-weight: 600;
        }

        &:last-child {
            a {
                color: rgb(250,70,22);
                opacity: 0.7;

                :hover {
                    opacity: 1;
                }

                text-decoration: none;
            }
        }
    }

    h2 {
        color: rgb(255, 255, 255);
        font-family: Qanelas-Bold;
        font-weight: bold;
        letter-spacing: 0px;
        font-size: 26px;
        margin-bottom: 0;

        :first-child {
            font-size: 34px;
        }


    }
`

const PostHeader = styled.h2`
    color: rgb(255, 255, 255);
    font-family: Qanelas-Bold;
    font-size: 42px;
    font-weight: bold;
    letter-spacing: 0px;
`