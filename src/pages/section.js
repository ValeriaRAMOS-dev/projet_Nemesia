import React, {Component} from 'react';
import ComponentSection from "./componentSection";
import './section.css'

class Section  extends Component{
    handleClick;

    render() {

        this.handleClick = () => {
            console.log('OUI')
        };

        return(
            <section>
                <ComponentSection title="Titre 1" content="Contenu 1" button="ok"/>
                <ComponentSection title="Titre 2" content="Contenu 2"/>
                <ComponentSection onClick={this.handleClick} title="Titre 3" content="Contenu 3" button="ok"/>
            </section>
        )
    }
}

export default Section