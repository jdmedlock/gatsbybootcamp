import React from 'React'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {
          data.allMarkdownRemark.edges.map(edge => {
            return (
                <li key={ edge.node.frontmatter.title }>
                  <h2>{ edge.node.frontmatter.title }</h2>
                  <p>{ edge.node.frontmatter.date }</p>
                </li>
            )
          })
        }
      </ol>
    </Layout>
  )
}

export default BlogPage
