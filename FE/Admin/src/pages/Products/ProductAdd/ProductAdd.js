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

    // Name, price and quantity
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    // Category
    const [category, setCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');

    // Size
    const [size, setSize] = useState('');
    const [newSize, setNewSize] = useState('');

    // Color
    const [color, setColor] = useState('');
    const [newColor, setNewColor] = useState('');

    // Brand, description and images
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);

    // Set state btn add
    const [btnAdd, setBtnAdd] = useState({
        category: false,
        size: false,
        color: false,
    });

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
    
    // Handle add new Category
    const btnAddNewCategory = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/product_images/addProductImage_NewProduct", { 
            category: newCategory
        });
        setBtnAdd({ ...btnAdd, category: !btnAdd.category });
    }

    // Handle add new Size
    const btnAddNewSize = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/product_images/addProductImage_NewProduct", { 
            size: newSize
        });
        setBtnAdd({ ...btnAdd, size: !btnAdd.size });
    }

    // Handle add new Color
    const btnAddNewColor = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/product_images/addProductImage_NewProduct", { 
            color: newColor
        });
        setBtnAdd({ ...btnAdd, color: !btnAdd.color });
    }

    // Handle submit form to add product
    const handleSubmit = e => { 
        e.preventDefault();
        // axios.post("http://localhost:8080/stock/addProductImage_NewProduct", { 
        //     product: {
        //         name,
        //         brand: price,
        //         description,
        //         category: {
        //             categoryId: category,
        //         },
        //     },
        //     urlImage: images,
        //     size: {
        //         name: size
        //     },
        //     color: {
        //         name: color
        //     },
        // });
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
        
        {/* *********************** Quantity ****************************** */}
                <FormInput
                    className={cx('form-control', 'quantity')}
                    classNameIp={cx('form-control-ip')}
                    type="number"
                    label="Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
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

                        <div className={cx('btn-other', btnAdd.category && 'other')}>
                            <Button 
                                content="Add new"
                                onClick={() => setBtnAdd({ ...btnAdd, category: !btnAdd.category})}
                            />
                        </div>
                        <div className={cx('btn-other', 'hidden', btnAdd.category && 'input')}>
                            <FormInput
                                className={cx('form-control')}
                                classNameIp={cx('form-control-ip')}
                                label="Category name"
                                onChange={(e) => setNewCategory(e.target.value)}
                            />
                            <Button 
                                content="Add"
                                onClick={(e) => {
                                    setBtnAdd({ ...btnAdd, category: !btnAdd.category})
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
                            displayEmpty
                            value={size}
                            onChange={getSize}
                            inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                            style={{ width: 200 }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {sizeItem.map((name, index) => (
                                <MenuItem
                                    key={index}
                                    value={name}
                                >
                                {name}
                                </MenuItem>
                            ))}
                        </Select>
                        <div className={cx('btn-other', btnAdd.size && 'other')}>
                            <Button 
                                content="Add new"
                                onClick={() => setBtnAdd({ ...btnAdd, size: !btnAdd.size})}
                            />
                        </div>
                        <div className={cx('btn-other', 'hidden', btnAdd.size && 'input')}>
                            <FormInput
                                className={cx('form-control')}
                                classNameIp={cx('form-control-ip')}
                                label="Size name"
                                onChange={(e) => setSize(e.target.value)}
                            />
                            <Button 
                                content="Add"
                                onClick={(e) => {
                                    setBtnAdd({ ...btnAdd, size: !btnAdd.size})
                                    btnAddNewSize(e)
                                }}
                            />
                        </div>

                    </div>
                </div>

        {/* *********************** COLOR ****************************** */}
                <div className={cx('form-control', 'category')}>
                    <p>Color <span>*</span> </p>
                    <div className={cx('category__container')}>
                        <Select
                            displayEmpty
                            value={color}
                            onChange={getColor}
                            inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                            style={{ width: 200 }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {colorItem.map((name, index) => (
                                <MenuItem 
                                    key={index}
                                    value={name}
                                >
                                {name}
                                </MenuItem>
                            ))}
                        </Select>
                        <div className={cx('btn-other', btnAdd.color && 'other')}>
                            <Button 
                                content="Add new"
                                onClick={() => setBtnAdd({ ...btnAdd, color: !btnAdd.color})}
                            />
                        </div>
                        <div className={cx('btn-other', 'hidden', btnAdd.color && 'input')}>
                            <FormInput
                                className={cx('form-control')}
                                classNameIp={cx('form-control-ip')}
                                label="Color name"
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <Button 
                                content="Add"
                                onClick={(e) => {
                                    setBtnAdd({ ...btnAdd, color: !btnAdd.color})
                                    btnAddNewColor(e)
                                }}
                            />
                        </div>

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
