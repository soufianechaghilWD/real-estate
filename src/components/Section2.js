import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IoMdArrowForward } from "react-icons/io" 
import { keyframes } from 'styled-components'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const animH = keyframes`
    from{left: -100px; opacity: 0;}
    to{left: 0px; opacity: 1;}
`

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2) 7rem;

    h1{
        position: relative;
        padding-left: 2rem;
        animation-name: ${animH};
        animation-duration: 1.3s;
    }
`
const ContainerContent = styled.div`
    padding: 5rem 2rem;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }

`



const ContainerBody = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: ${({down}) => (down ? '100px' : '0')};

    img{
        width: 100%;
        height: 100%;
        max-width: 550px;
        max-height: 350px;
        object-fit: cover;
    }

    h2{
        padding: 1.5rem 0;
    }

    p{
        display: flex;
        align-items: center;
        font-weight: 400;
        cursor: pointer;
    }
`
const Arrow = styled(IoMdArrowForward)`
    margin-left: 0.5rem;
`

const Section2 = ({ data }) => {


    const controls = useAnimation();
    const [ref, inView] = useInView();

        useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <Container>
            <h1>View our newest Homes</h1>
            <ContainerContent>
                {data?.map((item, index) => (
                    <ContainerBody key={index} down={item.down} >
                        <motion.img src={item.image} alt="image"
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        transition={{ duration: 0.6}}
                        variants={{
                          visible: { opacity: 1, scale: 1 },
                          hidden: { opacity: 0.3, scale: 1.1 }
                        }}
                        />
                        <h2>{item.label}</h2>
                        <p>View Details <Arrow /></p>
                    </ContainerBody>
                ))}
            </ContainerContent>
        </Container>
    )
}

export default Section2
