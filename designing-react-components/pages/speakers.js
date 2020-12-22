import React from 'react'
import Header from "../src/components/Header";
import Speakers from "../src/components/Speakers";
import Menu from "../src/components/Menu";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar";
import Footer from "../src/components/Footer";

class Page extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <SpeakerSearchBar/>
                <Speakers/>
                <Footer/>
            </div>
        );
    }
}

export default Page
