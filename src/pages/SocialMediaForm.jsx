import React, { useState } from 'react';
import './SocialMediaForm.scss';
import { FiSend } from "react-icons/fi";

const SocialMediaForm = () => {
  const [formData, setFormData] = useState([]);
  const [newPost, setNewPost] = useState({
    image: '',
    title: '',
    description: '',
    postedBy: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.entries(newPost).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = `${key.slice(0, 1).toUpperCase()}${key.slice(1)} is required`;
      }
    });//soru

    if (Object.keys(newErrors).length === 0) {
      // formdata ya yeni post ekleme yapilir
      setFormData([...formData, newPost]);
      // submitten sonra form alanini temislemek icin
      setNewPost({
        image: '',
        title: '',
        description: '',
        postedBy: '',
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='form-main-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Image URL</label>
          <br/>
          <input
          className='image-input'
            type="text"
            id="image"
            name="image"
            value={newPost.image}
            onChange={handleChange}
          />
          {errors.image && <p className="error">{errors.image}</p>}
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <br/>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleChange}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <br/>
          <input
            id="description"
            name="description"
            value={newPost.description}
            onChange={handleChange}
          ></input>
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
        <div>
          <label htmlFor="postedBy">Posted by</label>
          <br/>
          <input
            type="text"
            id="postedBy"
            name="postedBy"
            value={newPost.postedBy}
            onChange={handleChange}
          />
          {errors.postedBy && <p className="error">{errors.postedBy}</p>}
        </div>
        <button className='btn'  type="submit">Submit <FiSend className='icon'/></button>
      </form>
      <div className="formData-container">
        <h4 className='new-posts'>New Posts</h4>
        {formData.map((item, index) => (
          <div key={index} className="post">
            <img src={item.image} alt={item.title} />
            <p>Title: {item.title}</p>
            <p>Description: {item.description}</p>
            <p>Posted by: {item.postedBy}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaForm;
