import React from 'react';
import { Nav, Menu, Breadcrumb, Footer, KaskoDetail} from '../Partials/Ui';

export default class Kasko extends React.Component{
    render(){

        const data = [
            {
                text: "Ürünler" 
            },
            {
                text: "Kasko"
            }
        ];

        const active = "Kasko"

        return (
            <div>
                <Nav/>
                <Menu/>
                {
                    <Breadcrumb item={data} active={active}/>
                }
                <KaskoDetail />
                <Footer/>
            </div>
        )
    }
}