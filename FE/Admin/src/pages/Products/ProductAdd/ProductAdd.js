import React, { useState } from "react";
import classNames from 'classnames/bind';
import Wrapper from "components/Wrapper";
import Editor from "components/Editor";
import FormInput from 'components/FormInput'
import ImageUploader from "components/ImageUploader";
import styles from './ProductAdd.module.scss';

// Library UI
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';

const cx = classNames.bind(styles);

function ProductAdd() {
    const [branch, setBranch] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);

    const [sizes, setSizes] = useState([]);
    const [isCheckedAll, setIsCheckedAll] = useState(false);

// Get branch
    const getBranch = (event) => {
        setBranch(event.target.value);
        console.log(event.target.value);
    };

// Get description
    const getDescription = (desc) => {
        setDescription(desc);
        console.log(desc);
    };

//  Get images
    const getImages = (images) => {
        setImages(images);
        console.log(images);
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

    console.log(sizes)

    return (
        <Wrapper className={cx('product-add')}>
            <h2>Create Product</h2>
            <Box
                component="form"
                padding="2rem"
                sx={{
                '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >

        {/* *********************** PRODUCT NAME ****************************** */}
                <FormInput
                    className={cx('form-control')}
                    classNameIp={cx('form-control-ip')}
                    label="Name"
                    onChange={(e) => console.log(e.target.value)}
                />

        {/* *********************** BRANCH ****************************** */}
                <FormControl fullWidth>
                    <div className={cx('form-control', 'branch')}>
                        <p>Branch <span>*</span> </p>
                        <Select
                            value={branch}
                            onChange={getBranch}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                            style={{ width: '30%' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                </FormControl>
    
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
                    onChange={(e) => console.log(e.target.value)}
                />

        {/* *********************** SIZE ****************************** */}
                <div className={cx('form-control', 'size')}>
                    <p>Size <span>*</span> </p>
                    <FormGroup className={cx('size-list')}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={isCheckedAll}
                                onChange={handleCheckAll}
                                />
                            }
                            label="Checked All"
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

        {/* *********************** DESCRIPTION ****************************** */}
                <div className={cx('form-control', 'editor')}>
                    <p>Description <span>*</span> </p>
                    <Editor content={getDescription} />
                </div>
            </Box>
        </Wrapper>
    );
}

export default ProductAdd;
