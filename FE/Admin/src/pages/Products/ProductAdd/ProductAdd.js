import React, { useState } from "react";
import classNames from 'classnames/bind';
import Wrapper from "components/Wrapper";
import Editor from "components/Editor";
import FormInput from 'components/FormInput'
import ImageUploader from "components/ImageUploader";
import styles from './ProductAdd.module.scss';
import Button from "components/Button";

// Library UI
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';

// Axios
import axios from "axios";

const cx = classNames.bind(styles);

function ProductAdd() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);

    const [sizes, setSizes] = useState([]);
    const [isCheckedAll, setIsCheckedAll] = useState(false);

    const [colors, setColors] = useState([]);
    const [isCheckedAllColor, setIsCheckedAllColor] = useState(false);

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
    const handleSizeChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
        setSizes((prevSizes) => [...prevSizes, value]);
        } else {
        setSizes((prevSizes) => prevSizes.filter((item) => item !== value));
        }
    };

    const handleCheckAll = (event) => {
        const { checked } = event.target;
        setIsCheckedAll(checked);
        setSizes(checked ? sizeItem : []);
    };

    const colorItem = ['White', 'Black', 'Yellow', 'Red', 'Blue'];
    const handleColorChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setColors((prevSizes) => [...prevSizes, value]);
        } else {
            setColors((prevSizes) => prevSizes.filter(item => item !== value));
        }
    };

    const handleCheckAllColor = (event) => {
        const { checked } = event.target;
        setIsCheckedAllColor(checked);
        setColors(checked ? colorItem : []);
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8080/product_images/addProductImage_NewProduct", { 
            product: {
                name,
                brand: price,
                description,
                category: {
                    categoryId: 1,
                },
            },
            urlImage: images[0],
            size: {
                name: sizes[0]
            },
            color: {
                name: colors[0]
            },
        });

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

        {/* *********************** BRANCH ****************************** */}
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

                        <div className={cx('category__btn')}>
                            <Button content="Other"/>
                        </div>
                        {/* <div className={cx('category__btn', 'input')}>
                            <FormInput
                                className={cx('form-control')}
                                classNameIp={cx('form-control-ip')}
                                label="Name"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <Button content="Other"/>
                        </div> */}
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
                <div className={cx('form-control', 'checkbox')}>
                    <p>Size <span>*</span> </p>
                    <FormGroup className={cx('size-list')}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={isCheckedAll}
                                onChange={handleCheckAll}
                                />
                            }
                            label="All"
                        />
                        {sizeItem?.map((item) => (
                        <FormControlLabel
                            key={item}
                            control={
                            <Checkbox
                                checked={sizes.includes(item)}
                                onChange={handleSizeChange}
                                value={item}
                            />
                            }
                            label={item}
                        />
                        ))}
                    </FormGroup>
                </div>

        {/* *********************** COLOR ****************************** */}
                <div className={cx('form-control', 'checkbox')}>
                    <p>Color <span>*</span> </p>
                    <FormGroup className={cx('size-list')}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isCheckedAllColor}
                                    onChange={handleCheckAllColor}
                                />
                            }
                            label="All"
                        />
                        {colorItem?.map((item) => (
                        <FormControlLabel
                            key={item}
                            control={
                            <Checkbox
                                checked={colors.includes(item)}
                                onChange={handleColorChange}
                                value={item}
                            />
                            }
                            label={item}
                        />
                        ))}
                    </FormGroup>
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
                        content="CANCEL"
                    />
                </div>
            </form>
        </Wrapper>
    );
}

export default ProductAdd;
