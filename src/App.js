import React from 'react';
import Profile from './image/profile.jpg';



export default class App extends React.Component {

    state = {
        show: false,
        hide: true,
        person: {
            fullname: 'TCHANGAI T. YOMA',
            bio: 'Habitant du monde #Nomade',
            img: Profile,
            profession: 'Entrepreneur Freelance'
            
        }
    }

    render() {
        return (
            <>
                {
                    this.state.show === true ?
                        (
                            <div>
                                <p>{this.state.person.fullname}</p>
                                <img src={Profile} height="200" width="200" alt="profile" />
                                <button onClick={() => this.setState({ show: !true })}>Masquer</button>
                            </div>
                            
                        )
                        :
                        (
                            <button onClick={() => this.setState({ show: !false })}>Afficher</button>
                          
                ) 
                } 
                
              
            </>
        )
    }
}