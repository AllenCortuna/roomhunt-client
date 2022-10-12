import React from 'react'
import ImageUploading from 'react-images-uploading';

const Image = (setPicture) => {

  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setPicture(images[0])
  };

  return (
    <div>
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image['data_url']} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        {({ imageList, onImageUpload, onImageRemoveAll, errors }) => (
          errors && <div>
            {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
            {errors.acceptType && <span>Your selected file type is not allow</span>}
            {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
            {errors.resolution && <span>Selected file is not match your desired resolution</span>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Image
