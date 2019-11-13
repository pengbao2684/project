import React, {Component} from 'react';
import { Table, Button, Modal, Form, Input, Divider } from 'antd';


class basicInformation extends Component{
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
              title: '客户单位',
              dataIndex: 'customerCompany',
            },
            {
              title: '客户地址',
              dataIndex: 'customerAddress',
            },
            {
              title: '客户邮编',
              dataIndex: 'customerZip',
            },
            {
              title: '客户行业',
              dataIndex: 'customerIndustry',
            },
            {
              title: '单位电话',
              dataIndex: 'companyNumber',
            },
            {
              title: '单位传真',
              dataIndex: 'companyFax',
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
                customerCompany: '上海理工大学',
                customerAddress: '上海市杨浦区军工路516号',
                customerZip: '200008',
                customerIndustry: 'IT制造业',
                companyNumber: '12345',
                companyFax: '6789',
                remarks: '无',
            },
            {
                key: '2',
                customerCompany: '上海理工大学',
                customerAddress: '上海市杨浦区军工路516号',
                customerZip: '200008',
                customerIndustry: 'IT制造业',
                companyNumber: '12345',
                companyFax: '6789',
                remarks: '无',
            },
            {
                key: '3',
                customerCompany: '上海理工大学',
                customerAddress: '上海市杨浦区军工路516号',
                customerZip: '200008',
                customerIndustry: 'IT制造业',
                companyNumber: '12345',
                companyFax: '6789',
                remarks: '无',
            },
            {
                key: '4',
                customerCompany: '上海理工大学',
                customerAddress: '上海市杨浦区军工路516号',
                customerZip: '200008',
                customerIndustry: 'IT制造业',
                companyNumber: '12345',
                companyFax: '6789',
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
                    title="添加客户"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <Form {...formItemLayout}>
                    <Form.Item label="客户单位">
                        {getFieldDecorator('customerCompany', {
                            rules: [],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="客户地址">
                        {getFieldDecorator('customerAddress', {
                            rules: [],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="客户邮编">
                        {getFieldDecorator('customerZip', {
                            rules: [],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="客户行业">
                        {getFieldDecorator('customerIndustry', {
                            rules: [],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="单位电话">
                        {getFieldDecorator('companyNumber', {
                            rules: [],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="单位传真">
                        {getFieldDecorator('companyFax', {
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

const WrappedbasicInformation = Form.create({})(basicInformation);
export default Form.create()((WrappedbasicInformation));
