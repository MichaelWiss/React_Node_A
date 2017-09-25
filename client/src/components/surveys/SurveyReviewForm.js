import React from 'react';
import { connect } from 'react-redux';

const SurveyReviewForm = ({ onCancel, formValues }) => {
	return (
       <div>
         <h5>Please confirm your entries</h5>
         <button
           className="yellow darken-3 btn-flat"
           onClick={onCancel}
           >
            Back
         </button>
       </div>
		);
};

function mapStateToProps(state) {
	   console.log(state);
       return {
         formValues: stateform.surveyForm.values
       };
}

export default connect(mapStateToProps)(SurveyReviewForm);