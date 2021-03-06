import React from 'react';
import { Nav, Menu, Breadcrumb, Footer, Features, about, AboutUS } from '../Partials/Ui';

export default class About extends React.Component{
    render(){

        const data = [
           
            {
                text: "Hakkımızda"
            }
        ];

        const active = "Hakkımızda"

        return (
            <div>
                <Nav/>
                <Menu/>
                {
                    <Breadcrumb item={data} active={active}/>
                }
                <Features/>
                <AboutUS/>            
                <Footer/>
            </div>
        )
    }
}