// import {useNavigate} from "react-router-dom";
// import { useParams } from "react-router";

// const ZodiacDescription = () => {

//     const { zodiac } = useParams();
//     let navigate = useNavigate();

//     return(
//         <h1>ZodiacDescription</h1>
//     )
// }

// export default ZodiacDescription

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchDescriptions } from '../actions/descriptionsActions';
import Description from '../components/Descriptions';

const DescriptionsPage = ({ dispatch, loading, descriptions, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchDescriptions())
  }, [dispatch])

  // Show loading, error, or success state
  const renderDescriptions = () => {
    if (loading) return <p>Loading descriptions...</p>
    if (hasErrors) return <p>Unable to display descriptions.</p>
    return descriptions.map((description) => <Description key={description.id} description={description} />)
  }

  return (
    <section>
      <h1>Descriptions</h1>
      {renderDescriptions()}
    </section>
  )
}

const mapStateToProps = (state) => ({
  loading: state.descriptions.loading,
  descriptions: state.descriptions.descriptions,
  hasErrors: state.descriptions.hasErrors,
})

export default connect(mapStateToProps)(DescriptionsPage)