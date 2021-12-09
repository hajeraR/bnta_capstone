import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


// Bring in the asynchronous fetchPosts action
import { fetchDescriptions, descriptionsSelector} from '../actions/descriptionsActions';

import { Description } from '../components/Description'


const DescriptionsPage = () => {
  const dispatch = useDispatch();
  const  { loading, descriptions, hasErrors } = useSelector(descriptionsSelector)
    useEffect(() => {
      dispatch(fetchDescriptions())
    }, [dispatch])

// Show loading, error, or success state
  const renderDescriptions = () => {
    if (loading) return <p>Loading descriptions...</p>
    if (hasErrors) return <p>Unable to display descriptions.</p>
    console.log(descriptions[0]);
    return descriptions.map((description) => {return(<Description key={descriptions.id} description={description} />)})
  }
  
    return (
      <section>
        <h1>Descriptions</h1>
        {renderDescriptions()}
      </section>
    )
}
  


export default DescriptionsPage;