import React, {Component} from 'react';
import { Table, Button, Modal, Form, Input, Divider, DatePicker } from 'antd';


class equipmentInformation extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible:false,
            startValue: null,
            endValue: null,
            endOpen: false,
        }
    }
    componentDidMount(){

    }

    handleCreate=()=>{
        this.setState({
            visible: true,
        })
    }

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

      disabledStartDate = (startValue) => {
        const { endValue } = this.state;
        if (!startValue || !endValue) {
          return false;
        }
        return startValue.valueOf() > endValue.valueOf();
      };
    
      disabledEndDate = (endValue) => {
        const { startValue } = this.state;
        if (!endValue || !startValue) {
          return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
      };

      onChange = (field, value) => {
        this.setState({
          [field]: value,
        });
      };
    
      onStartChange = (value) => {
        this.onChange('startValue', value);
      };
    
      onEndChange = (value) => {
        this.onChange('endValue', value);
      };
    
      handleStartOpenChange = (open) => {
        if (!open) {
          this.setState({ endOpen: true });
        }
      };
    
      handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
      };
    

    render(){
        const { getFieldDecorator } = this.props.form;
        const { startValue, endValue, endOpen } = this.state;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
        };
        const columns = [
            {
                title: '更改时间',
                dataIndex: 'changeTime',
            },
            {
                title: '配置人',
                dataIndex: 'configurator',
            },
            {
                title: '主机编号',
                dataIndex: 'hostNumber',
            },
            {
                title: '主机名称',
                dataIndex: 'hostName',
            },
            {
                title: '设备编号',
                dataIndex: 'equipmentNumber',
            },
            {
                title: 'pH传感器',
                dataIndex: 'phSensor',
            },
            {
                title: '电导率传感器',
                dataIndex: 'conductivitySensor',
            },
            {
                title: '浊度传感器',
                dataIndex: 'turbiditySensor',
            },
            {
                title: 'COD传感器',
                dataIndex: 'codSensor',
            },
            {
                title: '荧光度传感器',
                dataIndex: 'fluorescenceSensor',
            },
            {
                title: 'PLC',
                dataIndex: 'plc',
            },
            {
                title: '仓库',
                dataIndex: 'warehouse',
            },
            {
                title: '库位',
                dataIndex: 'location',
            },
            {
                title: '备注',
                dataIndex: 'remarks',
            },
            {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                  <span>
                    <a>编辑</a>
                    <Divider type="vertical" />
                    <a>删除</a>
                  </span>
                ),
              },
          ];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
        };

        const data = [
            {
                key: '1',
                changeTime: '2019/04/04 12:23:07',
                configurator: '运维工程师一',
                hostNumber: '20180919',
                hostName: '水管家三代',
                equipmentNumber: '20190404202',
                phSensor: 'PH-BTA',
                conductivitySensor: 'SC200',
                turbiditySensor: 'WQ730B',
                codSensor: 'COD8-G05',
                fluorescenceSensor: 'UVX-300P',
                plc: 'S7-1200',
                warehouse: '1号仓',
                location: '0211',
                remarks: '配置完成',
            },
            {
                key: '2',
                changeTime: '2019/04/04 12:23:07',
                configurator: '运维工程师一',
                hostNumber: '20180919',
                hostName: '水管家三代',
                equipmentNumber: '20190404202',
                phSensor: 'PH-BTA',
                conductivitySensor: 'SC200',
                turbiditySensor: 'WQ730B',
                codSensor: 'COD8-G05',
                fluorescenceSensor: 'UVX-300P',
                plc: 'S7-1200',
                warehouse: '1号仓',
                location: '0211',
                remarks: '配置完成',
            },
            {
                key: '3',
                changeTime: '2019/04/04 12:23:07',
                configurator: '运维工程师一',
                hostNumber: '20180919',
                hostName: '水管家三代',
                equipmentNumber: '20190404202',
                phSensor: 'PH-BTA',
                conductivitySensor: 'SC200',
                turbiditySensor: 'WQ730B',
                codSensor: 'COD8-G05',
                fluorescenceSensor: 'UVX-300P',
                plc: 'S7-1200',
                warehouse: '1号仓',
                location: '0211',
                remarks: '配置中',
            },
            {
                key: '4',
                changeTime: '2019/04/04 12:23:07',
                configurator: '运维工程师一',
                hostNumber: '20180919',
                hostName: '水管家三代',
                equipmentNumber: '20190404202',
                phSensor: 'PH-BTA',
                conductivitySensor: 'SC200',
                turbiditySensor: 'WQ730B',
                codSensor: 'COD8-G05',
                fluorescenceSensor: 'UVX-300P',
                plc: 'S7-1200',
                warehouse: '1号仓',
                location: '0211',
                remarks: '配置完成',
            },
        ];

        

        return(
            <div>
                <div style={{marginTop:"20px",marginLeft:"20px",marginBottom:"20px"}}>
                    <span>
                        <span style={{fontSize:"20px",fontWeight:"normal"}}>设备配置记录：</span>
                        <Button type="primary" style={{float:"right"}} onClick={this.handleCreate}>添加</Button>
                    </span>
                </div>

                <Form layout="inline" style={{marginLeft:"20px",marginBottom:"20px"}}>
                    <Form.Item label="日期筛选">
                        {getFieldDecorator('contact', {
                            rules: [],
                        })(
                            <DatePicker
                                disabledDate={this.disabledStartDate}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                value={startValue}
                                placeholder="Start"
                                onChange={this.onStartChange}
                                onOpenChange={this.handleStartOpenChange}
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="至">
                        {getFieldDecorator('contact', {
                            rules: [],
                        })(
                            <DatePicker
                                disabledDate={this.disabledEndDate}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                value={endValue}
                                placeholder="End"
                                onChange={this.onEndChange}
                                open={endOpen}
                                onOpenChange={this.handleEndOpenChange}
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="主机编号">
                        {getFieldDecorator('contactPosition', {
                            rules: [],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="设备编号">
                        {getFieldDecorator('contactPosition', {
                            rules: [],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">
                            搜索
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button>
                            重置
                        </Button>
                    </Form.Item>
                </Form>

                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />

                <Modal
                    title="添加联系人"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <Form {...formItemLayout}>
                    <Form.Item label="111">
                        {getFieldDecorator('contact', {
                            rules: [],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="联系人职位">
                        {getFieldDecorator('contactPosition', {
                            rules: [],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="联系人电话">
                        {getFieldDecorator('contactNumber', {
                            rules: [],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="备注">
                        {getFieldDecorator('remarks', {
                            rules: [],
                        })(<Input />)}
                    </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

const WrappedequipmentInformation = Form.create({})(equipmentInformation);
export default Form.create()((WrappedequipmentInformation));
