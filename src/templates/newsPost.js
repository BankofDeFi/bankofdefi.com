
import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"
import moment from 'moment'

import Post from 'src/components/common/Post'
import PostDate from 'src/components/common/Post/postDate'
import PrimaryPostTag from 'src/components/common/Post/primaryPostTag'
import PostPagination from 'src/components/common/Post/postPagination'

import Layout from 'src/components/common/Layout'
import ReadingTime from 'src/components/common/ReadingTime/'



export default function Template(props) {
  const { data, pageContext } = props
  const { nextPostSlug, prevPostSlug } = pageContext
  const { ghostPost } = data // data.markdownRemark holds your post data
  const { title, html, published_at, feature_image, primary_tag, reading_time } = ghostPost
  const formattedPublishedDate = moment(published_at).local().format('MMM DD YYYY').split(' ')

  return (
    <Layout>
      <BlogPostWrapper>
        <PostTitle>{title}</PostTitle>
        <PostMeta>
            <PrimaryMeta>
                <PrimaryPostTag postTag={"announcements"} />
                <span className="divider">•</span>
                <PostDate publishedPostDate={formattedPublishedDate} />
            </PrimaryMeta>
            <ReadingTime time={reading_time} />
        </PostMeta>



        <Post>
          <ImageWrapper>
            <img src={feature_image} />
          </ImageWrapper>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
        </Post>

        <PostPagination nextPostSlug={nextPostSlug} prevPostSlug={prevPostSlug} />
      </BlogPostWrapper>
    </Layout>
  )
}



export const pageQuery = graphql`
  query($title: String) {
    ghostPost(title: { eq: $title }) {
      id
      html
      slug
      created_at
      reading_time
      excerpt
      title
      published_at
      reading_time
      feature_image
      primary_tag {
          name
      }
    }
  }
`


const BlogPostWrapper = styled.div`
  margin-top: 50px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  // padding: 2% 5%;

  img {
    border-radius: 6px;
  }

  // .blogPost__ImageWrapper-kMyoBq {
  //   border-radius: 6px;
  //   border: 1px solid rgba(0,0,0,0.22);
  //   box-shadow: 0px 20px 20px 0px rgba(0,0,0,0.3);
  // }

  .blog-post-content {

    > figure {
      img {
        display: none; 
      }

      figcaption {
        margin-bottom: 50px;
        text-align: center;
      }
    }

    .twitter-tweet {
      margin: 75px auto !important;
    }

    p {
      font-size: 20px;
      margin-bottom: 30px;
      line-height: 32px;
    }

    strong {
      font-weight: 700;
      color: #fff;
      font-family: 'Spartan',sans-serif;
    }

    img {
      max-width: 800px;
      width: 100%;
    }

    h2, h3 { 
      margin-top: 50px;
      margin-bottom: 20px;
      text-align: left;
    }

    h2 {
      color: rgb(255, 255, 255);
      font-family: 'Spartan',sans-serif;
      font-size: 34px;
      font-weight: bold;
      letter-spacing: 0px;
    }

    h3 {
      color: rgb(255, 255, 255);
      font-family: 'Spartan',sans-serif;
      font-size: 26px;
      font-weight: bold;
      letter-spacing: 0px;
    }

    blockquote {
      margin: 50px 0;
      color: rgba(255, 255, 255, 0.8);
      font-family: 'Spartan',sans-serif;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0.75px;
      position: relative;
      border-left: 10px solid rgb(250, 70, 22);
      padding: 2% 4%;
    }

    figure {
      margin: 0;
      margin-bottom: 20px;
      img {
        max-height: 330px;
        }
    }
  }

  section {
    padding: 0;
    padding-bottom: 5%;
  }
  
  h1 {
    color: rgb(255, 255, 255);
    font-family: 'Spartan',sans-serif;
    font-size: 46px;
    font-weight: bold;
    letter-spacing: 0px;
    border-bottom: 1px solid rgb(64, 70, 72);
    padding-bottom: 20px;

    @media(max-width: 600px) {
      font-size: 28px;
      // text-align: center;
      padding-top: 5%;
    }
  }


`

const ImageWrapper = styled.div`
  margin-bottom: 20px;
  img {
      max-width: 1300px;
      width: 100%;
  }
`


const PostTitle = styled.h1`
`

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const PrimaryMeta = styled.div`
  display: flex;
  align-items: center;
  .divider {
    margin: 0 5px;
    color: rgba(255,255,255, 0.5)
  }
`