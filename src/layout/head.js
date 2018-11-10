import React, {Component} from 'react';

import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';


import ('./index.less');

const {Header} = Layout;

class Head extends Component {

    render() {
        return (<Header className="header">
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/list">list页面</Link></Menu.Item>
                {/*<Menu.Item key="3"><Link to="/login">登录页</Link></Menu.Item>*/}
            </Menu>
        </Header>)
    }
}

export default Head;