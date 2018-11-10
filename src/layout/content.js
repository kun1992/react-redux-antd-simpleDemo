import React, {Component} from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../page/home/index';
import List from "../page/list/index";

const {Content} = Layout;

class MainConent extends Component {

    render() {
        return (<Layout style={{padding: '24px'}}>
            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/list" exact component={List}></Route>
                </Switch>
            </Content>
        </Layout>)
    }

}

export default MainConent;