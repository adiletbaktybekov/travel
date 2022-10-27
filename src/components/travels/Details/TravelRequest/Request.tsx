import React, {FC} from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';

interface MyFormValues {
    firstName: string;
    email: string;
    phoneNumber:any
}

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(0, 'Э халтурщик жазбайсынбы!')
        .min(3, 'Мен сенден атынды сурап атам!')
        .max(30, 'Совсем узун боп кетти!')
        .required('Э халтурщик жазбайсынбы!'),
    email: Yup.string()
        .min(5,"Совсем кыска!")
        .email('Туура жаз!')
        .required(''),
})


const Request: FC = () => {

    const initialValues: MyFormValues = {
        firstName: '',
        phoneNumber:'',
        email:'',
    }

    return (
        <>
            <div className="travelDetails-eighth-request">
                <div className="travelDetails-eighth-request-left">
                    <div className="travelDetails-eighth-request-left-title">
                        <h1 className="travelDetails-title">РЕГИСТРИРАЦИЯ НА ПУТЕШЕСТВИЕ</h1>
                        <p>После регистрации наш менеджер
                            свяжется с вами и уточнит все детали </p>
                    </div>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={(values, actions) => {
                        console.log(JSON.stringify(values,null,2))
                        actions.setSubmitting(false);}}>
                    {({ errors, touched }) => (
                        <div className="travelDetails-eighth-request-right">
                            <Form>
                                <div className="travelDetails-eighth-request-right-item">
                                    <h1> ФИО*</h1>
                                    <div className="travelDetails-eighth-request-right-item-input">
                                        <label htmlFor="firstName">
                                            <Field id="firstName" name="firstName" placeholder="Иван Петров"/>{errors.firstName && touched.firstName ? (<div><p style={{color:"red"}}>{errors.firstName}</p></div>) : null}
                                        </label>

                                    </div>
                                    <h1>Номер телефона * </h1>
                                    <div className="travelDetails-eighth-request-right-item-input">
                                        <label htmlFor="phoneNumber" id="phoneNumber">
                                            <PhoneInput country={"kg"} onChange={phone => console.log({phone})}
                                                        placeholder="+996 550 01 22 08"/>
                                        </label>
                                    </div>
                                    <h1> Email*</h1>
                                    <div className="travelDetails-eighth-request-right-item-input-email">
                                        <label htmlFor="firstName">
                                            <Field id="email" name="email" placeholder="example@mail.com"/>{errors.email && touched.email ? (<div><p style={{color:"red"}}>{errors.email}</p></div>) : null}</label>
                                    </div>
                                    {/*{errors.email && touched.email ? (<div><p style={{color:"green"}}>{errors.email}</p></div>) : null}*/}
                                    {/*{touched.firstName&&touched.firstName?(<div><p style={{color:"green"}}>{touched.firstName&&touched.email}</p></div>):null}*/}
                                    <div className="travelDetails-eighth-request-right-item-down">
                                        <p>Ваши данные надежно защищены
                                            и не будут переданы третьим лицам</p>
                                        <button type="submit">Отправить</button>
                                    </div>
                                </div>
                            </Form>
                        </div>)
                    }
                </Formik>
            </div>
        </>
    );
};

export default Request;