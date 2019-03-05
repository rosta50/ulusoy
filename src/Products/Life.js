import React from 'react';
import { Nav, Menu, Breadcrumb, Footer } from '../Partials/Ui';

export default class Life extends React.Component{
    render(){

        const data = [
            {
                text: "Ürünler" 
            },
            {
                text: "Hayat"
            }
        ];

        const active = "Hayat"

        return (
            <div>
                <Nav/>
                <Menu/>
                {
                    <Breadcrumb item={data} active={active}/>
                }
                <Footer/>
            </div>
        )
    }
}