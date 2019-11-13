import React, {Component} from 'react';
import { Table, Button, Modal, Form, Input, Divider } from 'antd';


class contactInformation extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible:false,
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

    render(){
        const { getFieldDecorator } = this.props.form;
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
              title: '联系人',
              dataIndex: 'contact',
            },
            {
              title: '联系人职位',
              dataIndex: 'contactPosition',
            },
            {
              title: '联系人电话',
              dataIndex: 'contactNumber',
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
                contact: '张三',
                contactPosition: '董事长',
                contactNumber: '12345',
                remarks: '无',
            },
            {
                key: '2',
                contact: '李四',
                contactPosition: '副董事长',
                contactNumber: '12345',
                remarks: '无',
            },
            {
                key: '3',
                contact: '王五',
                contactPosition: '总经理',
                contactNumber: '12345',
                remarks: '无',
            },
            {
                key: '4',
                contact: '刘六',
                contactPosition: '总裁',
                contactNumber: '12345',
                remarks: '无',
            },
        ];

        return(
            <div>
                <div style={{marginTop:"20px",marginLeft:"20px",marginBottom:"20px"}}>
                    <span>
                        <span style={{fontSize:"20px",fontWeight:"normal"}}>客户单位：一汽锡柴</span>
                        <Button type="primary" style={{float:"right"}} onClick={this.handleCreate}>添加</Button>
                    </span>
                </div>

                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />

                <Modal
                    title="添加联系人"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <Form {...formItemLayout}>
                    <Form.Item label="联系人">
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

const WrappedcontactInformation = Form.create({})(contactInformation);
export default Form.create()((WrappedcontactInformation));
