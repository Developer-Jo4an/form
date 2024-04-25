import React from 'react'
import PageDescription from '../components/baseComponents/head/pageDescription/PageDescription'
import defaultPage from '../constants/page-description'
import FormWrapper from "../components/form/FormWrapper";

export default function Home() {
  return (
    <div className="container">
      <PageDescription {...defaultPage}/>
      <FormWrapper/>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
