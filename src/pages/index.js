import React from "react"
import Head from './../components/head'
//import Home from './../components/home/home'
import Layout from './../components/layout/layout'
import Homepage from './../components/homepageInnos/homepage'

const IndexPage =()=>{
  return(
    <Layout>
    <Head title="Home"/>
    <Homepage/>
    </Layout>
  )
}

export default IndexPage
