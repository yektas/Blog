import React, { Component } from 'react';
import { Icon } from 'antd';
import Dropzone from 'react-dropzone';
import postStore from '../../store/PostStore';

class CoverImageUpload extends Component {
    state = {
      imageFile: null,
      imagePreview: postStore.coverImage
    }
    onDrop = (files) => {
        const uploadedFile = files.map((file) =>
        Object.assign(file, {
            preview: URL.createObjectURL(file)
        })
    )[0]
        postStore.setCoverImage(files[0]);
        this.setState({ imagePreview: uploadedFile })
    };

    render() {
        const { imagePreview } = this.state;
          return (
            <Dropzone onDrop={this.onDrop} multiple={false} accept='image/jpeg, image/png'>
                {({ getRootProps, getInputProps, isDragActive }) => {
                    return imagePreview ? (
                        <div  key={imagePreview.name}>
                            <div >
                                <img width="300px" src={imagePreview.preview} alt="test" />
                            </div>
                        </div>
                    ) : (
                        <div className='ant-upload ant-upload-drag' {...getRootProps()}>
                            <p className='ant-upload-drag-icon'>
                                <Icon type='inbox' />
                            </p>
                            <p className='ant-upload-text'>Click or drag file to this area to upload</p>
                            <p className='ant-upload-hint'>
                                Support for a single or bulk upload. Strictly prohibit from uploading company data or
                                other band files
                            </p>
                            <input {...getInputProps()} />
                        </div>
                    );
                }}
            </Dropzone>
        );
    }
}

export default CoverImageUpload;
