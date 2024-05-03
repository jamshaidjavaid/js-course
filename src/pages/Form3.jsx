import { useState } from 'react';
import './Form3.scss';
import { Form } from 'react-bootstrap';

const Form3 = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        gender: "",
        terms: "",
    };

    const [formValues, setFormValues] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const inputHandle = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormValues({ ...formValues, [e.target.name]: value });
    };

    const validateForm = () => {
        let isValid = true;
        let errorsCopy = { ...errors };

        if (!formValues.firstName) {
            isValid = false;
            errorsCopy.firstName = "First name is required";
        }

        if (!formValues.lastName) {
            isValid = false;
            errorsCopy.lastName = "Last name is required";
        }

        if (!formValues.password) {
            isValid = false;
            errorsCopy.password = "Password is required";
        }

        if (!formValues.email) {
            isValid = false;
            errorsCopy.email = "Email is required";
        }

        if (!formValues.phoneNumber) {
            isValid = false;
            errorsCopy.phoneNumber = "Phone number is required";
        }

        if (!formValues.terms) {
            isValid = false;
            errorsCopy.terms = "You must accept the terms and conditions";
        }

        //! errorsCopy objesini state'teki errors objesine atanıyor.
        setErrors(errorsCopy);

        //! isValid değeri fonksiyon sonucu olarak döndürülüyor.
        console.log(formValues); // Form değerlerini burada görebilirsiniz.
        return isValid;
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const formValidation = validateForm();
        if (!formValidation) {
            return;
        }

        setFormValues(initialState);

        console.log(formValues);
    };

    return (
        <>
            <h1>Form 3</h1>

            <form onSubmit={onSubmit}>
                <div className='input1'>
                    <input
                        type="text"
                        placeholder="Adınızı giriniz"
                        name="firstName"
                        value={formValues.firstName}
                        onChange={inputHandle}
                    />
                    {errors.firstName && (
                        <p className="error-message">{errors.firstName}</p>
                    )}
                </div>

                <div className='input2'>
                    <input
                        type="text"
                        placeholder="Soyadınızı giriniz"
                        name="lastName"
                        value={formValues.lastName}
                        onChange={inputHandle}
                    />
                    {errors.lastName && (
                        <p className="error-message">{errors.lastName}</p>
                    )}
                </div>

                <div className='input3'>
                    <input
                        type="text"
                        placeholder="E-mailinizi giriniz"
                        name="email"
                        value={formValues.email}
                        onChange={inputHandle}
                    />
                    {errors.email && (
                        <p className="error-message">{errors.email}</p>
                    )}
                </div>

                <div className='input4'>
                    <input
                        type="text"
                        placeholder="Telefon numaranızı giriniz"
                        name="phoneNumber"
                        value={formValues.phoneNumber}
                        onChange={inputHandle}
                    />
                    {errors.phoneNumber && (
                        <p className="error-message">{errors.phoneNumber}</p>
                    )}
                </div>

                <div className='input5'>
                    <Form.Group>
                        <Form.Label>Cinsiyet</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Erkek"
                            name="gender"
                            value="erkek"
                            onChange={inputHandle}
                        />
                        <Form.Check
                            type="radio"
                            label="Kadın"
                            name="gender"
                            value="kadin"
                            onChange={inputHandle}
                        />
                    </Form.Group>
                </div>

                <Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="Kullanım şartlarını kabul ediyorum"
                        name="terms"
                        checked={formValues.terms}
                        onChange={inputHandle}
                    />
                    {errors.terms && (
                        <p className="error-message">{errors.terms}</p>
                    )}
                </Form.Group>

                <button type='submit'>Gönder</button>
            </form>
        </>
    );
};

export default Form3;
