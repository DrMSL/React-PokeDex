import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Select from 'react-select';

// Errors with React Select :(

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


export  class TeamPage extends Component {



    

    render() {


        // console.log(this.props.todo)
        return (
            <div>
                <h1>My team page </h1>
                {/* <Select options={options} /> */}
            </div>
        )
    }




}

// PropTypes
TeamPage.propTypes = {
    todo: PropTypes.object,
  }

export default TeamPage
