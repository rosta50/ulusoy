import React from 'react';
import { Nav, Menu, Breadcrumb, Footer } from '../Partials/Ui';

export default class Health extends React.Component{
    render(){

        const data = [
            {
                text: "Ürünler" 
            },
            {
                text: "Sağlık"
            }
        ];

        const active = "Sağlık"

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