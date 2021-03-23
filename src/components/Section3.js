import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Pic from '../images/pic4.jpg'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


const Container = styled.div`
    margin: 0 calc((100vw - 1300px) / 2) 0;
    height: calc(100vh + 60px); 
    max-height: 1000px;
    background-color: #000d1a;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        height: calc(100vh + 400px);
        max-height: 1400px;
    }
`



const ContainerContent = styled.div`
    background: #fff;
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;

    img{
        height: calc(100% + 150px);
        max-width: 40%;
        object-fit: cover;

        @media screen and (max-width: 768px){
           order: 1;
           width: calc(100vw - 150px);
           height: 50%;
           position: relative;
           top: -5%;
        }
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: calc(100% - 200px);
    }
`
const ContainerLeft = styled(motion.div)`
    padding-left: 5rem;


    @media screen and (max-width: 768px){
        order: 2;
        padding-left: 2rem;
        width: 100vw;
        line-height: 1.7;
    }

    h1{
        padding: 2rem 0;

        @media screen and (max-width: 768px){
            padding: 0.5rem 0;
        }
    }

    p{
        padding: 1rem 0;
        font-weight: 500;

        @media screen and (max-width: 768px){
            padding: 0.5rem 0;
        }
    }
`

const Section3 = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

        useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);



    return (
        <Container>
            <ContainerContent>
                <ContainerLeft
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.6}}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0.3, x: -100 }
                }}
                >
                    <h1>Stunnig Interior</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati harum voluptatem perspiciatis accusamus autem repellat saepe magnam itaque. Laboriosam rerum quasi fuga odit in nobis cum maiores, animi provident.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius quam iure sunt vitae debitis.</p>
                    <Button>Learn More</Button>
                </ContainerLeft>
                <motion.img src={Pic} alt="" 
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ duration: 0.6}}
                variants={{
                  visible: { opacity: 1, scale: 1, y: 0 },
                  hidden: { opacity: 0.3, scale: 1.1, y: -100 }
                }}
                />
            </ContainerContent>
        </Container>
    )
}

export default Section3
