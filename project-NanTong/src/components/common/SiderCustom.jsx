import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderCustom extends Component{
    constructor(props){
        super(props);
        const { collapsed }= props;
        this.state = {
            collapsed: collapsed,
            firstHide: true, //第一次先隐藏暴露的子菜单
            selectedKey: '', //选择的路径
            openKey: '', //打开的路径（选择的上一层）
        }
    }
    componentDidMount() {
        this.setMenuOpen(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.onCollapse(nextProps.collapsed);
        this.setMenuOpen(nextProps);
    }
    setMenuOpen = props => {
        const {path} = props;
        this.setState({
            openKey: path.substr(0, path.lastIndexOf('/')),
            selectedKey: path
        });
    };
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            firstHide: collapsed,
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
    };
    openMenu = v => {
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };

    render(){
        const { collapsed, firstHide, openKey, selectedKey } = this.state;
        return(
            <Sider trigger={null} collapsed={collapsed}>
                <div className="logo" style={collapsed?{backgroundSize:'70%'}:{backgroundSize:'30%'}}/>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    onClick={this.menuClick}
                    onOpenChange={this.openMenu}
                    openKeys={firstHide ? null : [openKey]}
                >

                    <Menu.Item key={"/app"}>
                        <Link to={"/app"}><Icon type="home" /><span>首页</span></Link>
                    </Menu.Item>
                    <SubMenu key="/app/form" title={<span><Icon type="api" /><span>运维</span></span>}>
                        <Menu.Item key={"/app/form/homePage"}>
                            <Link to={"/app/form/homePage"}><Icon type="form" /><span>运维首页</span></Link>
                        </Menu.Item>
                        <Menu.Item key={"/app/form/intimeMonitor"}>
                            <Link to={"/app/form/intimeMonitor"}><Icon type="form" /><span>实时监控</span></Link>
                        </Menu.Item>
                        <Menu.Item key={"/app/form/quilityReminder"}>
                            <Link to={"/app/form/quilityReminder"}><Icon type="form" /><span>水质提醒记录</span></Link>
                        </Menu.Item>
                        <Menu.Item key={"/app/form/deviceDetails"}>
                            <Link to={"/app/form/deviceDetails"}><Icon type="form" /><span>设备详情</span></Link>
                        </Menu.Item>
                        <Menu.Item key={"/app/form/sensorCalibration"}>
                            <Link to={"/app/form/sensorCalibration"}><Icon type="form" /><span>传感器标定</span></Link>
                        </Menu.Item>
                        <Menu.Item key={"/app/form/equipmentMaintenance"}>
                            <Link to={"/app/form/equipmentMaintenance"}><Icon type="form" /><span>设备维护</span></Link>
                        </Menu.Item>
                        <Menu.Item key={"/app/form/videoSurveillance"}>
                            <Link to={"/app/form/videoSurveillance"}><Icon type="form" /><span>视频监控</span></Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/chart" title={<span><Icon type="area-chart" /><span>基本信息</span></span>}>
                        <Menu.Item key="/app/chart/basicInformation">
                            <Link to={'/app/chart/basicInformation'}><span>客户基础信息</span></Link>
                        </Menu.Item>
                        <Menu.Item key="/app/chart/contactInformation">
                            <Link to={'/app/chart/contactInformation'}><span>联系人信息</span></Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/richText" title={<span><Icon type="property-safety" /><span>固定资产</span></span>}>
                        <Menu.Item key="/app/richText/equipmentInformation">
                            <Link to={'/app/richText/equipmentInformation'}><Icon type="edit" /><span>设备信息</span></Link>
                        </Menu.Item>
                        <Menu.Item key="/app/richText/equipmentScrap">
                            <Link to={'/app/richText/equipmentScrap'}><Icon type="edit" /><span>设备报废</span></Link>
                        </Menu.Item>
                        <Menu.Item key="/app/richText/equipmentTransfer">
                            <Link to={'/app/richText/equipmentTransfer'}><Icon type="edit" /><span>设备调拨</span></Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/app/upload">
                        <Link to={'/app/upload'}><Icon type="carry-out" /><span>订单汇总</span></Link>
                    </Menu.Item>
                    <SubMenu key="/app/userRights" title={<span><Icon type="cluster" /><span>用户权限</span></span>}>
                        <Menu.Item key="/app/userRights/userList">
                            <Link to={'/app/userRights/userList'}><Icon type="team" /><span>用户列表</span></Link>
                        </Menu.Item>
                        <Menu.Item key="/app/userRights/authorityManagement">
                            <Link to={'/app/userRights/authorityManagement'}><Icon type="edit" /><span>权限管理</span></Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}