import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import ReadingTime from 'src/components/common/ReadingTime'
import PostDate from 'src/components/common/Post/postDate'
import moment from 'moment'



const PostCard = props => {
    const { postData, theme, firstSentence, secondSentence } = props
    const edge = postData
    const { title, excerpt, feature_image, primary_tag, published_at, slug, reading_time } = edge.node
    const formattedPublishedDate = moment(published_at).local().format('MMM DD YYYY').split(' ')
    const primaryTag = primary_tag && primary_tag.name || "Sports"
    
    return (
            <PostCardContainer>
                <Link to={`/blog/${slug}`}>
                    <PostCardWrapper>
                        <FeaturedImageWrapper><img src={feature_image} /></FeaturedImageWrapper>
                        <PostCardContent>
                                <PostCardTitle>{title}</PostCardTitle>
                                <PostCardMeta>
                                    <span>{primaryTag}</span>
                                    <span className="divider">•</span>
                                    <PostDate publishedPostDate={formattedPublishedDate} />
                                </PostCardMeta>
                                {theme.type === 'mainTheme' && <PostCardExcerpt><p>{firstSentence}.</p></PostCardExcerpt>}
                                {theme.type === 'midTheme' && <PostCardExcerpt><p>{firstSentence}.</p></PostCardExcerpt>}
                                {theme.type === 'thumbnailTheme' && <PostCardExcerpt><p>{firstSentence.substring(0,100)}...</p></PostCardExcerpt>}

                                <ReadingTime time={reading_time} />
                            </PostCardContent>
                    </PostCardWrapper>
                </Link>
            </PostCardContainer>)
}

export default PostCard


const PostCardContainer = styled.div`

    >a {
        text-decoration: none;
    }

    p {
        margin: 8px 0;
    }


    max-width: ${({ theme }) => theme.container.maxWidth };
    @media(max-width: 600px) {
        max-width: 100% ;
    }
`
const PostCardWrapper = styled.div`
    display: flex;
    // justify-content: space-between;

    flex-flow: ${({theme}) => theme.container.flexFlow};
    @media(max-width: 768px) {
        flex-flow: row wrap;
    }

`
const PostCardTitle = styled.h1`
        color: rgba(255, 255, 255, 1);
        font-family: 'Spartan',sans-serif;
        font-size: ${({ theme }) => theme.title.fontSize };
        font-weight: bold;
        letter-spacing: 0px;
        margin: ${({ theme }) => theme.postCardTitle.margin };


        @media(max-width: 600px) {
            font-size: 22px;
            margin: 20px 0 0 0;
        }

        
`
const PostCardContent = styled.div`
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${({theme}) => theme.postCardContent.padding};
    @media(max-width: 768px) {
            padding: 0;
    }
`


const PostCardExcerpt = styled.p`
        font-family: 'Spartan',sans-serif;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 24px;
        max-width: 527px;
        
`


const FeaturedImageWrapper = styled.div`
    background: #000 url('${props => props.featuredImg}') cover no-repeat;
    width: 100%;
    
    img {
        width: 100%;
        max-width: ${props => props.theme.featuredImg.maxWidth};
        max-height: ${({ theme }) => theme.featuredImg.maxHeight};
        min-height: 195px;
        @media(max-width: 600px) {
            max-width: 100%;
            max-height: 100%;
        }

        ${props =>  props.theme.type === 'midTheme' && css`
            object-position: ${props.theme.featuredImg.objectPosition};
            object-fit: ${props.theme.featuredImg.objectFit};
        `
        }
`

const PostCardMeta = styled.div`
    display: flex;
    align-items: center;

    >span:first-child {
        color: rgb(119, 175, 239);
        font-family: 'Spartan',sans-serif;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.44px;
        text-transform: uppercase;
    }

    .divider {
        color: rgb(138, 138, 138);
        font-family: 'Spartan',sans-serif;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.44px;
        padding: 0 4px;
    }
`