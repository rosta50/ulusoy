import React from 'react';
import { Nav, Menu, Breadcrumb, Footer } from '../Partials/Ui';

export default class Traffic extends React.Component{
    render(){

        const data = [
            {
                text: "Ürünler" 
            },
            {
                text: "Trafik"
            }
        ];

        const active = "Trafik"

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