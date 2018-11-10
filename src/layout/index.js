import React, {Component} from 'react';
import {Layout} from 'antd';


import Head from './head';
import SiderBar from './siderbar';
import ConentMain from './content';


class App extends Component {
    render() {
        return (
            <Layout>
                <Head/>
                <Layout>
                    <SiderBar/>
                    <Layout>
                        <ConentMain/>
                    </Layout>

                </Layout>
            </Layout>
        );
    }
}

export default App;
