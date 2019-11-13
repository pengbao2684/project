import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';
import '../../style/index.less';
import {getCookie, setCookie} from "../../helpers/cookies";

import SiderCustom from './SiderCustom';
import HeaderCustom from './HeaderCustom';
import MIndex from '../index/Index';

import Calendars from '../header/Calendars';
// import Echarts from '../chart/echarts/Echarts';

import homePage from '../form/homePage';
import intimeMonitor from '../form/intimeMonitor';
import quilityReminder from '../form/quilityReminder';
import deviceDetails from '../form/deviceDetails';
import sensorCalibration from '../form/sensorCalibration';
import equipmentMaintenance from '../form/equipmentMaintenance';
import videoSurveillance from '../form/videoSurveillance';

import basicInformation from '../chart/basicInformation';
import contactInformation from '../chart/contactInformation';

import equipmentInformation from '../richText/equipmentInformation';
import equipmentScrap from '../richText/equipmentScrap';
import equipmentTransfer from '../richText/equipmentTransfer';

import authorityManagement from '../userRights/authorityManagement';
import userList from '../userRights/userList';

import noMatch from './404';

const {Content, Footer} = Layout;

export default class App extends Component {
    state = {
        collapsed: getCookie("mspa_SiderCollapsed") === "true",
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        }, function () {
            setCookie("mspa_SiderCollapsed", this.state.collapsed);
        });
    };

    componentDidMount() {
        //保存Sider收缩
        if (getCookie("mspa_SiderCollapsed") === null) {
            setCookie("mspa_SiderCollapsed", false);
        }
    }

    render() {
        const {collapsed} = this.state;
        const {location} = this.props;
        let name;
        console.log(typeof getCookie(""));
        if (!getCookie("mspa_user") || getCookie("mspa_user") === "undefined") {
            return <Redirect to="/login"/>
        } else {
            name = JSON.parse(getCookie("mspa_user")).username;
        }

        return (
            <Layout className="ant-layout-has-sider" style={{height: '100%'}}>
                <SiderCustom collapsed={collapsed} path={location.pathname}/>
                <Layout>
                    <HeaderCustom collapsed={collapsed} toggle={this.toggle} username={name}/>
                    <Content style={{margin: '0 16px'}}>
                        <Switch>
                            <Route exact path={'/app'} component={MIndex} />

                            <Route exact path={'/app/form/homePage'} component={homePage} />
                            <Route exact path={'/app/form/intimeMonitor'} component={intimeMonitor}/>
                            <Route exact path={'/app/form/quilityReminder'} component={quilityReminder}/>
                            <Route exact path={'/app/form/deviceDetails'} component={deviceDetails}/>
                            <Route exact path={'/app/form/sensorCalibration'} component={sensorCalibration}/>
                            <Route exact path={'/app/form/equipmentMaintenance'} component={equipmentMaintenance}/>
                            <Route exact path={'/app/form/videoSurveillance'} component={videoSurveillance}/>

                            <Route exact path={'/app/chart/basicInformation'} component={basicInformation} />
                            <Route exact path={'/app/chart/contactInformation'} component={contactInformation} />

                            <Route exact path={'/app/header/Calendars'} component={Calendars} />

                            <Route exact path={'/app/richText/equipmentInformation'} component={equipmentInformation} />
                            <Route exact path={'/app/richText/equipmentScrap'} component={equipmentScrap} />
                            <Route exact path={'/app/richText/equipmentTransfer'} component={equipmentTransfer} />


                            <Route exact path={'/app/userRights/authorityManagement'} component={authorityManagement} />
                            <Route exact path={'/app/userRights/userList'} component={userList} />

                            <Route component={noMatch} />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                    <p style={{marginBottom:"0px"}}>公司地址：上海理工大学</p>
                    <p style={{marginBottom:"0px"}}>联系电话：12345</p>
                    <p>邮箱：12345@qq.com</p>                    
                    </Footer>
                </Layout>
                   
            </Layout>

        );
    }
}
