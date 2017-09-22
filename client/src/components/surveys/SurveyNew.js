import React, { Component } from 'react';
import SurveyForm from'./SurveyForm';
import SurveyReviewForm from './SurveyReviewForm';

class SurveyNew extends Component {
	state = { showReviewForm: false };

	renderContent() {
		if (this.state.showReviewForm === true) {
            return <SurveyReviewForm />;
		}
	}

	render() {
		return (
			<div>
			  <SurveyForm />
			</div>    
	   );		
	}
} 

export default SurveyNew;