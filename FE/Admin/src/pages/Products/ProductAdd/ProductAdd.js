import Wrapper from "components/Wrapper";
import classNames from 'classnames/bind';
import styles from './ProductAdd.module.scss';
import FormInput from 'components/FormInput'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import Editor from "components/Editor";

const cx = classNames.bind(styles);

function ProductAdd() {
    const [branch, setBranch] = useState('');
    const [description, setDescription] = useState('');


// Get value branch
    const handleChange = (event) => {
        setBranch(event.target.value);
        console.log(event.target.value);
    };

// Get value description
    const getDescription = (desc) => {
        setDescription(desc)
        console.log(desc);
    }

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
                <FormInput 
                    className={cx('form-control')} 
                    classNameIp={cx('form-control-ip')} 
                    label="Name" 
                    onChange={(e) => console.log(e.target.value)}
                />

                <FormControl fullWidth >
                    <div className={cx('form-control')}>
                        <p>Branch <span>*</span> </p>
                        <Select
                            value={branch}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                            style={{width: '30%'}}
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

                <FormInput 
                    className={cx('form-control')} 
                    classNameIp={cx('form-control-ip')} 
                    label="Price" 
                    onChange={(e) => console.log(e.target.value)}
                />

                <div className={cx('form-control', 'editor')}>
                    <p>Description <span>*</span> </p>
                    <Editor 
                        content={getDescription}
                    />
                </div>

            </Box>
        </Wrapper>
    )
}

export default ProductAdd;