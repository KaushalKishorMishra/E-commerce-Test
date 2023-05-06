import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import MCard from '../Card'
import NCard from '../newcard/NewCard'
import { Box } from '@mui/material'

// image import 
import blackTShirts from '../../assets/images/black-t-shirts-with-copy-space.jpg'
import blackTshirt from "../../assets/images/blank-black-t-shirt-hanger-isolated-white-background.jpg"

const HomePage = () => {
    const Items = [{ title: "Hello", description: "This is a description", image: "../../assets/images/black-t-shirts-with-copy-space.jpg" }, { title: "Hello", description: "This is a description", image: { blackTShirts } }, { title: "Hello", description: "This is a description", image: { blackTShirts } }, { title: "Hello", description: "This is a description", image: { blackTShirts } }, { title: "Hello", description: "This is a description", image: { blackTshirt } }]
    return (
        <>
            <Header />
            <Navbar />
            <Box sx={{ display: "flex", margin: "5px", padding: "5px" }}>
                {
                    Items.map((item, index) => {
                        return (
                            <NCard key={index} title={item.title} description={item.description} img={item.image} />
                        )
                    }
                    )
                }
            </Box>
        </>
    )
}

export default HomePage