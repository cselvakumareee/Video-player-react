import React, { Component } from 'react';
import DataContext from './Context/dataContext';

class sampleComp extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[
                {id:'1', text:"1"},
                {id:'2', text:"2"},
                {id:'3', text:"3"},
            ]
        }
    }
    render(){
        return(
            <div>
                <DataContext.Provider value={{items: this.state.items}}>
                    <p>sampleComp</p>
                </DataContext.Provider>
            </div>
        );
    }
}

export default sampleComp;