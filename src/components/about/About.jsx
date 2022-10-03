import React from 'react'
import "./about.scss"

export default function About() {
    return (
        <div className='about' id='about'>
            <div className="container">
                <h1 className='header'>Hey there!</h1>
                <span>
                    My name is Devin, I'm a recent graduate from the University of Michigan in 2022.
                    I will be starting as a software engineer at SAP in January of 2023. I enjoy
                    game design and creating full stack applications, but don't mind what I'm
                    doing as long as it improves the quality of lives around me.
                </span>
            </div>
        </div>
    )
}