import { Helmet, HelmetProvider } from "react-helmet-async";
import './NewAccount.scss';
import Tab from 'components/Tab';
import InputGroup from 'components/InputGroup';
import { Button } from "components/Button";
import { useState } from "react";

function NewAccount() {
    const page = "Accounts New";
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
    });

    const [isFocused, setIsFocused] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
    });

    const formItem = {
        personalInfo: [
            {
                id: "firstName",
                label: "First Name",
            },
            {
                id: "lastName",
                label: "Last Name",
            },
        ],
        signUp: [
            {
                id: "email",
                label: "Email",
            },
            {
                id: "password",
                label: "Password",
            },
            {
                id: "confirmPassword",
                label: "Confirm Password",
            },
        ]
    };

    const handleOnChange = (e, input) => {
        const { value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [input]: value
        }));

        if (value.trim() === '') {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                [input]: true
            }));
        } else {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                [input]: false
            }));
        }
    }

    const handleOnBlur = (input) => {
        setIsFocused(prevIsFocused => ({
            ...prevIsFocused,
            [input]: true
        }));
    }

    const renderError = (input, label) => {
        if (isFocused[input] && formErrors[input]) {
            return <p>{`${label} is required`}</p>;
        }
        return null;
    }

    const handleFocus = (input) => {
        setIsFocused(prevIsFocused => ({
            ...prevIsFocused,
            [input]: false
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // console.log("firstName: ", form.firstName)
    // console.log("lastName: ", form.lastName)
    // console.log("email: ", form.email)
    // console.log("password: ", form.password)
    // console.log("confirmPassword: ", form.confirmPassword)

    return (
        <HelmetProvider>
            <Helmet>
                <title> {page} </title>
            </Helmet>

            <div className="accounts-new">
                <Tab className="accounts-new-tab" page={page} category="Womens Dress" product="Angels malu" />
                <h1>Create New Customer Account</h1>
                <div className="accounts-new-container">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="input-control">
                            <h3>Personal Information</h3>
                            {formItem?.personalInfo.map(item => (
                                <div key={item.id} className="input">
                                    <InputGroup
                                        id={item.id}
                                        className={`${renderError(item.id, item.label) !== null ? 'input-error' : ""}`}
                                        label={item.label}
                                        placeholder={item.label}
                                        value={form[item.id]}
                                        onChange={e => handleOnChange(e, item.id)}
                                        onBlur={() => handleOnBlur(item.id)}
                                        onFocus={() => handleFocus(item.id)}
                                    />
                                    {renderError(item.id, item.label)}
                                </div>
                            ))}
                            <div className="checkbox-sign-up">
                                <input id="sign-up-newsletter" type="checkbox" />
                                <label htmlFor="sign-up-newsletter">Sign Up for Newsletter</label>
                            </div>
                        </div>
                        <div className="input-control">
                            <h3>Sign Up for Newsletter</h3>
                            {formItem?.signUp.map(item => (
                                <div key={item.id} className="input">
                                    <InputGroup
                                        id={item.id}
                                        label={item.label}
                                        placeholder={item.label}
                                        value={form[item.id]}
                                        onChange={e => handleOnChange(e, item.id)}
                                        onBlur={() => handleOnBlur(item.id)} 
                                        onFocus={() => handleFocus(item.id)} 
                                    />
                                    {renderError(item.id, item.label)}
                                </div>
                            ))}
                        </div>

                        <div className="btn-action-form">
                            <Button
                                type="submit"
                                className="btn-action-create"
                                onClick={e => handleSubmit(e)}
                            >
                                <p>Create an account</p>
                            </Button>
                            <Button
                                type="button"
                                className="btn-action-back"
                            >
                                Back
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default NewAccount;
