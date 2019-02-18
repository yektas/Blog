import React, { Component } from 'react'
import { Upload, Icon } from "antd";

const Dragger = Upload.Dragger;

const props = {
    accept: "image/jpeg",
    name: 'file',
    
  };

class CoverImageUpload extends Component {
    state = {
    fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }]
    }
  render() {
      
    return (
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
      </Dragger>
    )
  }
}

export default CoverImageUpload
