import React from 'react';
import { Nav, Menu, Breadcrumb, Footer, Features, ContactUs } from '../Partials/Ui';

export default class Contact extends React.Component{
    render(){

        const data = [
           
            {
                text: "Bize Ulaşın"
            }
        ];

        const active = "Bize Ulaşın"

        return (
            <div>
                <Nav/>
                <Menu/>
                {
                    <Breadcrumb item={data} active={active}/>
                }

                <ContactUs/>
                <Footer/>
            </div>
        )
    }
}