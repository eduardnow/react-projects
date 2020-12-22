import React from 'react'
import Speakers from "../src/components/Speakers/Speakers";
import Layout from "../src/components/Layout/Layout";

class Page extends React.Component {
    render() {
        return (
            <Layout>
                <Speakers/>
            </Layout>
        );
    }
}

export default Page
