import { Component } from 'react';

import ListClasses from './ListClasses/ListClasses';

class Categories extends Component {
    constructor(props){
        super(props);

        this.state = {
            schooleclasses: []

        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/schoolclasses')
        .then(res => res.json())
        .then(res => this.toState({schooleclasses: res}))
        .catch(error => console.log(error));

    }

    render(){

        console.log(this.state.schooleclasses);

        return(

            <div id='site-schooleClasses'>
                <ul className='list-schooleClasse'>
                    {this.state.schooleclasses.map(x => <
                    schoolclasses
                        key={x.id}
                        id={x.id}
                        classname={x.classname}
                        />
                    )}
               
                </ul>
            </div>

        );
    
    }

}

export default Categories;