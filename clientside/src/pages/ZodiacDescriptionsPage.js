import React from 'react';
import '../styles/description.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";


// Bring in the asynchronous fetchPosts action
import { fetchDescriptions, descriptionsSelector} from '../actions/descriptionsActions';

import { Description } from '../components/Description'


const DescriptionsPage = () => {

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
      };
  }


    return (
      zodiacSign === "capricorn" || zodiacSign === "sagittarius" || zodiacSign === "scorpio" || zodiacSign === "libra" || 
      zodiacSign === "virgo" || zodiacSign === "leo" || zodiacSign === "cancer" || zodiacSign === "gemini" || zodiacSign === "taurus" || 
      zodiacSign === "aries" || zodiacSign === "pisces" || zodiacSign === "aquarius" ?
      (<body id="description_page">
        <section>
        <Link to="/horrorPage" className="homeLink"><AiOutlineHome className="home-icon"/></Link>
        {renderDescriptions()}
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
      </section>
      </body>)
      : 
      <div className = "errorPage">
      
      <h1>404: Page not found</h1>
      <a href="/horrorPage"><HiOutlineArrowNarrowLeft /></a>
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      
      </div>
      
    )
}
  


export default DescriptionsPage;