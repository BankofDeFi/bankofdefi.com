import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import moment from 'moment'
import Grid from '@material-ui/core/Grid';


import Layout from "src/components/common/Layout"
import SEO from "src/components/common/SEO"
import ReadingTime from "src/components/common/ReadingTime"
import PostDate from 'src/components/common/Post/postDate'
import PostCard from 'src/components/common/Post/postCard'


const mainTheme = {
    type: 'mainTheme',

    container: {
        maxWidth: '1300px',
        flexFlow: 'row nowrap',
    },

    title: {
        fontSize: '32px',
    },

    featuredImg: {
        maxWidth: '742px',
        maxHeight: '415px'
    },
    postCardTitle: {
        margin: '0 0 10px 0'
    },
      postCardContent: {
        padding: '0 2%',
    }


}
const midTheme = {
    type: 'midTheme',
    container: {
        maxWidth: '625px',
        maxHeight: '300px',
        flexFlow: 'row wrap',
    },
    title: {
        fontSize: '22px',
    },
    featuredImg: {
        maxWidth: '625px',
        maxHeight: '227px',
        objectFit: 'cover',
        objectPosition: '0 20%',
    },
    postCardTitle: {
        margin: '20px 0 0 0'
    },
    postCardContent: {
        padding: '0',
    },
}

const thumbnailTheme = {
    type: 'thumbnailTheme',
    container: {
        maxWidth: '400px',
        flexFlow: 'row wrap',
    },
    title: {
        fontSize: '22px',
    },
    featuredImg: {
        maxWidth: '400px',
        maxHeight: '195px'
    },
    postCardTitle: {
        margin: '20px 0 0 0'
    },
      postCardContent: {
        padding: '0',
    }

}


const NewsIndexPage = ({ data }) => {
    const { edges } = data.allGhostPost
    const totalPosts = edges.length
    

    return (<Layout>
                <SEO title="Blog" />
                <BlogWrapper>
                <Grid 
                    container 
                    spacing={6}
                    direction="row"
                    // justify="center"
                >
                    {edges.map((edge, index) => {
                        const { title, excerpt, feature_image, primary_tag, published_at, slug, reading_time } = edge.node
                    
                        const formattedPublishedDate = moment(published_at).local().format('MMM DD YYYY').split(' ')
                        const primaryTag = primary_tag && primary_tag.name || "Sports"
                        const [ firstSentence, secondSentence ] = excerpt.split('.')

                        if (index === 0) {
                            return <ThemeProvider  theme={mainTheme}><Grid item xs={12}><PostCard theme={mainTheme} postData={edge} firstSentence={firstSentence} secondSentence={secondSentence}  /></Grid></ThemeProvider>
                        } else if (index > 0 && index < 3) {
                            return <ThemeProvider theme={midTheme}><Grid item xs={12} sm={6}><PostCard theme={midTheme} postData={edge} firstSentence={firstSentence} secondSentence={secondSentence} /></Grid></ThemeProvider>
                        } else if (index > 2 && index < 6 ) {
                            return <ThemeProvider  theme={midTheme}><Grid item xs={12} sm={6}><PostCard theme={midTheme} postData={edge} firstSentence={firstSentence} secondSentence={secondSentence} /></Grid></ThemeProvider>
                        } else {
                            return <ThemeProvider  theme={midTheme}><Grid item xs={12} sm={6}><PostCard theme={midTheme} postData={edge} firstSentence={firstSentence} secondSentence={secondSentence} /></Grid></ThemeProvider>
                        }
                        })}
                </Grid>
                </BlogWrapper>
            </Layout>)
}


export default NewsIndexPage


const BlogWrapper = styled.section`
    padding: 40px 5%;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-between;
    
    img {
        border-radius: 6px;
        border: 1px solid rgba(0,0,0,0.22);
        box-shadow: 0px 20px 20px 0px rgba(0,0,0,0.3);
    }
`

export const pageQuery = graphql`
  query NewsIndexQuery {
    allGhostPost {
            edges {
                node {
                    title
                    excerpt
                    feature_image
                    reading_time
                    published_at
                    slug
                    primary_tag {
                        name
                    }
                }
            }
        }

  }
`