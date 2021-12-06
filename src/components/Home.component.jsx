import React from 'react';
import styled from 'styled-components';
import Section from './Section.component'

function Home() {
    return (
        <Container>
            <Section
                    title="Model S"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="Tesla1.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="2020_tesla_model-y_4dr-suv_performance_fq_oem_1_1600.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="2019-Tesla-Model-3-Performance-USA-spec-01.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="tes-06-01-16-tesla-model-x-5.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America "
                description="Money-back guarantee"
                backgroundImg="-1x-1.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof"
                backgroundImg="tesla-solar-shingles-1162x640.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="Tesla-Wall-Connector-copy-1280x720.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
