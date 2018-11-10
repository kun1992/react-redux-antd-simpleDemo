import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';
import {connect} from 'react-redux';
import {clickRose, clickAdd, clickReSet} from '../../store/home/action'

import('./index.less')

class Home extends Component {
    constructor(props) {
        super(props)
    }

    /**
     * +
     */
    clickAdd1 = () => {
        this.props.clickAdd();
    };
    /**
     * -
     */
    clickRose1 = () => {
        this.props.clickRose()
    };
    /**
     * 重置
     */
    clickReSet1 = () => {
        this.props.clickReSet()
    }

    render() {
        return (<div>
            <Row>
                <Col className="num">次数:<span>{this.props.initValue.count}</span></Col>
            </Row>
            <Row>
                <Col span={8} className="col_btn"><Button onClick={this.clickAdd1}>点击 + </Button></Col>
                <Col span={8} className="col_btn"><Button onClick={this.clickRose1}>点击 - </Button></Col>
                <Col span={8} className="col_btn"><Button onClick={this.clickReSet1}>重置</Button></Col>
            </Row>

        </div>)
    }
}

export default connect(state => ({
    initValue: state.initValue,
}), {
    clickRose,
    clickAdd,
    clickReSet
})(Home);
