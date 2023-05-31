import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage2 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';


const Feature = () => {
  return (
    <div id='features'>
        <div className="a-container">
            <FeatureBox image = {featureimage} title = 'Development course' />
            <FeatureBox image = {featureimage2} title = 'Development course' />
            <FeatureBox image = {featureimage3} title = 'Development course' />
        </div>
      
    </div>
  )
}

export default Feature
