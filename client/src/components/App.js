import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import header from './header';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing Hello There</h2>

const App = () => {
	return (
       <div>
         
        <BrowserRouter>
        <div>
          <header />
          <Route exact path="/" component={Landing} />
          <Route path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
        </BrowserRouter>

       </div>
    );
};

export default App;