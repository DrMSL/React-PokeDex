import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select-2';

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
                <h1
                style={{ width: '100%', padding: '10px 5px', backgroundColor: '#55a0d6', color: '#fff', marginBottom: '0' }}
                >My team page </h1>
                <h2
                style={{ width: '100%', padding: '10px 5px', backgroundColor: '#fff', color: '#000', marginBottom: '0' }}
                >
                    Unfinished, but would like to add the option to select Pokemon here to add to the team using "react-select-2".</h2>
                <Select options={options} />
            </div>
        )
    }




}

// PropTypes
TeamPage.propTypes = {
    todo: PropTypes.object,
  }

export default TeamPage
