import React from 'react';
import '../styles/description.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";


// Bring in the asynchronous fetchPosts action
import { fetchDescriptions, descriptionsSelector} from '../actions/descriptionsActions';

import { Description } from '../components/Description'


const DescriptionsPage = () => {

  // const [zodiacSignName, setZodiacSignName] = useState("Virgo");
  const { zodiacSign }  = useParams();


  const dispatch = useDispatch();
  const  { loading, descriptions, hasErrors } = useSelector(descriptionsSelector)
    useEffect(() => {
      dispatch(fetchDescriptions(zodiacSign))
    }, [dispatch])

// Show loading, error, or success state
  const renderDescriptions = () => {
    if (loading) return <p>Loading descriptions...</p>
    if (hasErrors) return <p>Unable to display descriptions.</p>
      if(descriptions.length){

      
      return descriptions.map((description) => (<Description key={description.id} description={description} />))
      }
      else{ 
        return <Description key={descriptions.id} description={descriptions} />
      }
    ;


  }


    return (
      <section>
        {renderDescriptions()}
      </section>
    )
}
  


export default DescriptionsPage;