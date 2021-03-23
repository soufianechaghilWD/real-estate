import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import { FiInstagram } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"
import { Button } from './Button'
import { IoMdArrowForward } from "react-icons/io" 


const Foo = styled.footer`
    background: #000d1a;
    display: flex;
    margin: 0 calc((100vw - 1300px) / 2);
    padding: 7rem 4rem 3rem;
    flex-direction: column;

    @media screen and (max-width: 768px){
        margin: 0;
        padding: 5rem 2rem;
    }
`
const Row1 = styled.div`
    display: flex;
    color: white;
    align-items: center;

    
    @media screen and (max-width: 768px){
        display: block;
    } 

    h1{
        font-size: clamp(2rem, 8vw, 4rem);
        padding: 0 1rem 0 0;
        line-height: 1.5em;
        height: 3em;   
        overflow: hidden; 
    }
`
const Row2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;

    @media screen and (max-width: 768px){
        display: block;
    }
`
const Con1 = styled.div`
    padding: 0 2rem;
    text-overflow: ellipsis;
    white-space: pre;

    @media screen and (max-width: 768px){
        padding: 3rem 0 1.5rem;
    }

    h4{
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    p{
        font-size: 0.9rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
`
const Conn1 = styled.div`
    color: #CD853F;

    @media screen and (max-width: 768px){
        padding-bottom: 2rem;
    }

    svg:first-child{
        margin-right: 0.7rem;
    }

    svg:not(:first-child){
        margin: 0 0.7rem;
    }

    svg{
        font-size: clamp(1rem, 8vw, 2rem);
    }
`
const Arrow = styled(IoMdArrowForward)`
    margin-left: 0.5rem;
`

const Footer = () => {
    return (
        <Foo>
            <Row1>
                <h1>Let's find your Dream Home</h1>
                <Con1>
                    <h4>Contact Us</h4>
                    <p>FAQ</p>
                    <p>Support</p>
                    <p>Question</p>
                </Con1>
                <Con1>
                    <h4>Offices</h4>
                    <p>United States</p>
                    <p>Europe</p>
                    <p>Canada</p>
                </Con1>
            </Row1>
            <Row2>
                <Conn1>
                    <FaYoutube />
                    <FiInstagram />
                    <FaFacebookF />
                    <FaLinkedinIn />
                </Conn1>
                <Button>Let's Chat <Arrow /></Button>
            </Row2>
        </Foo>
    )
}

export default Footer
