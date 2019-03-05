import React from 'react';
import { Nav, Menu, Breadcrumb, Footer } from '../Partials/Ui';

export default class  Nakliyat extends React.Component{
    render(){

        const data = [
            {
                text: "Ürünler" 
            },
            {
                text: "Nakliyat"
            }
        ];

        const active = "Nakliyat"

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