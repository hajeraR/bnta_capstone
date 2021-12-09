import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

// Bring in the asynchronous fetchPosts action
import { fetchDescriptions } from '../actions/descriptionsActions';

import { Description } from '../components/Descriptions'


const DescriptionsPage = ({ dispatch, loading, descriptions, hasErrors }) => {
    useEffect(() => {
      dispatch(fetchDescriptions())
    }, [dispatch])

// Show loading, error, or success state
const renderDescriptions = () => {
    if (loading) return <p>Loading descriptions...</p>
    if (hasErrors) return <p>Unable to display descriptions.</p>
    return descriptions.map((description) => <Description key={descriptions.id} description={description} />)
  }
  
    return (
      <section>
        <h1>Descriptions</h1>
        {renderDescriptions()}
      </section>
    )
  }
  


// Map Redux state to React component props
const mapStateToProps = (state) => ({
    loading: state.descriptions.loading,
    descriptions: state.descriptions.descriptions,
    hasErrors: state.descriptions.hasErrors,
  })
  // Connect Redux to React
  export default connect(mapStateToProps)(DescriptionsPage)