import React from 'react';
import { Nav, Menu, Breadcrumb, Footer, Rehber } from '../Partials/Ui';

export default class Rehber extends React.Component{
    render(){

        const data = [
            
            {
                text: "Sigorta Rehberi"
            }
        ];

        const active = "Rehber"

        return (
            <div>
                <Nav/>
                <Menu/>
                {
                    <Breadcrumb item={data} active={active}/>
                }
                <Rehber/>
                <Footer/>
            </div>
        )
    }
}