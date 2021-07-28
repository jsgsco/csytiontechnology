import { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Header } from '../../components/Header/Header'
import { Portfolio } from '../../components/Portfolio/Portfolio'
import { Slider } from '../../components/Slider/Slider'
import { About } from '../../components/About/About'

export const Home = () => {
    return(
        <Fragment>
            <Helmet>
                <title>Csytion Technology S.A.S</title>
            </Helmet>
            <Header />
            <Portfolio /> 
            <Slider />
            <About />
        </Fragment>
    )
}