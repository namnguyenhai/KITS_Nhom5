import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from 'classnames/bind';
import Wrapper from "components/Wrapper";
import Editor from "components/Editor";
import FormInput from 'components/FormInput'
import ImageUploader from "components/ImageUploader";
import styles from './ProductAdd.module.scss';
import Button from "components/Button";

// Library UI
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

// Axios
import axios from "axios";

const cx = classNames.bind(styles);

function ProductAdd() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const [category, setCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');

    const [brand, setBrand] = useState('');
    const [btnAdd, setBtnAdd] = useState(false);
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');

// Get category
    const getCategory = (event) => {
        setCategory(event.target.value);
    };

// Get description
    const getDescription = (desc) => {
        setDescription(desc);
    };

//  Get images
    const getImages = (images) => {
        setImages(images);
    };

//  Get size
    const sizeItem = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
    const getSize = (event) => {
        setSize(event.target.value);
    };


// Get color
    const colorItem = ['White', 'Black', 'Yellow', 'Red', 'Blue'];
    const getColor = (event) => {
        setColor(event.target.value);
    };
    
    console.log(newCategory)
    const btnAddNewCategory = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/product_images/addProductImage_NewProduct", { 
            category: newCategory
        });
    }

    const handleSubmit = e => { 
        e.preventDefault();
        axios.post("http://localhost:8080/product_images/addProductImage_NewProduct", { 
            product: {
                name,
                brand: price,
                description,
                category: {
                    categoryId: category,
                },
            },
            urlImage: images,
            size: {
                name: size
            },
            color: {
                name: color
            },
        });
    }

    const goBack = () => {
		navigate(-1);
	}

    return (
        <Wrapper className={cx('product-add')}>
            <h2>Create Product</h2>
            <form
                onSubmit={e => handleSubmit(e)}
            >

        {/* *********************** PRODUCT NAME ****************************** */}
                <FormInput
                    className={cx('form-control')}
                    classNameIp={cx('form-control-ip')}
                    label="Name"
                    onChange={(e) => setName(e.target.value)}
                />

        {/* *********************** CATEGORY ****************************** */}
                <div className={cx('form-control', 'category')}>
                    <p>Category <span>*</span> </p>
                    <div className={cx('category__container')}>
                        <Select
                            value={category}
                            onChange={getCategory}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                            style={{ width: 200 }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Ten</MenuItem>
                            <MenuItem value={2}>Twenty</MenuItem>
                            <MenuItem value={3}>Thirty</MenuItem>
                        </Select>

                        <div className={cx('category__btn', btnAdd && 'other')}>
                            <Button 
                                content="Add new"
                                onClick={() => setBtnAdd(!btnAdd)}
                            />
                        </div>
                        <div className={cx('category__btn', 'hidden', btnAdd && 'input')}>
                            <FormInput
                                className={cx('form-control')}
                                classNameIp={cx('form-control-ip')}
                                label="Category name"
                                onChange={(e) => setNewCategory(e.target.value)}
                            />
                            <Button 
                                content="Add"
                                onClick={(e) => {
                                    setBtnAdd(!btnAdd)
                                    btnAddNewCategory(e)
                                }}
                            />
                        </div>
                    </div>
                </div>
    
        {/* *********************** IMAGE ****************************** */}
                <div className={cx('form-control', 'image')}>
                    <p>Image <span>*</span> </p>
                    <ImageUploader images={getImages} />
                </div>

                {/* PRICE */}
                <FormInput
                    className={cx('form-control')}
                    classNameIp={cx('form-control-ip')}
                    label="Price"
                    onChange={(e) => setPrice(e.target.value)}
                />

        {/* *********************** SIZE ****************************** */}
                <div className={cx('form-control', 'category')}>
                    <p>Size <span>*</span> </p>
                    <div className={cx('category__container')}>
                        <Select
                            value={size}
                            onChange={getSize}
                            inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                            style={{ width: 200 }}
                        >
                            {sizeItem.map((name, index) => (
                                <MenuItem
                                    key={index}
                                    value={name}
                                >
                                {name}
                                </MenuItem>
                            ))}
                        </Select>

                    </div>
                </div>

        {/* *********************** COLOR ****************************** */}
                <div className={cx('form-control', 'category')}>
                    <p>Color <span>*</span> </p>
                    <div className={cx('category__container')}>
                        <Select
                            value={color}
                            onChange={getColor}
                            inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                            style={{ width: 200 }}
                        >
                            {colorItem.map((name, index) => (
                                <MenuItem 
                                    key={index}
                                    value={name}
                                >
                                {name}
                                </MenuItem>
                            ))}
                        </Select>

                    </div>
                </div>

        {/* *********************** DESCRIPTION ****************************** */}
                <div className={cx('form-control', 'editor')}>
                    <p>Description <span>*</span> </p>
                    <Editor content={getDescription} />
                </div>

        {/* *********************** SUBMIT ****************************** */}
                <div className={cx('btn-action')}>
                    <Button 
                        onClick={e => handleSubmit(e)}
                        content="SUBMIT"
                    />
                    <Button 
                        onClick={goBack}
                        className={cx('cancel')}
                        content="CANCEL"
                    />
                </div>
            </form>
        </Wrapper>
    );
}

export default ProductAdd;
