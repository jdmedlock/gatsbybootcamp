import React from 'React'
import { Link } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>I'm a full stack Web Developer in St. Louis, Missouri, US who 
      concentrates on the React, NodeJS, and PostgreSQL technical stack for my
      work.</p>
      <p>In addition, I'm a co-founder of Chingu.io. At Chingu our mission is
      to help developers bridge the gap between what they have learned 
      and the expertise using it that's required by employers.</p>
      <p>You can get my contact information from the 
      <Link to="/contact"> Contact </Link>
       page.</p>
    </Layout>
  )
}

export default AboutPage