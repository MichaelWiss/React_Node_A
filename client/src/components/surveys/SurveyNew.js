import React, { Component } from 'react';
import SurveyForm from'./SurveyForm';
import SurveyReviewForm from './SurveyReviewForm';

class SurveyNew extends Component {
	state = { showReviewForm: false };

	renderContent() {
		if (this.state.showReviewForm === true) {
            return <SurveyReviewForm />;
		}

		return <SurveyForm />;
	}

	render() {
		return (
			<div>
			  {this.renderContent()}
			</div>    
	   );		
	}
} 

export default SurveyNew;