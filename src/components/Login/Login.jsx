import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {login} from "../../redux/auth-reducer";
import s from "./Login.module.scss";

const LoginForm = (props) => {

    const onSubmit = async values => {
        props.login (values.email, values.password, values.captcha);
    }
    if (props.isAuth) return <Redirect to = {"profile"} />
    return (
        <div className = {s.login} >
                <div className = {s.login__title} >
                    Login
                </div>
                <div>
                    <Form
                        onSubmit={onSubmit}
                        validate={values => {
                            const errors = {}
                            if (!values.email) {
                            errors.email = 'Required'
                            }
                            if (!values.password) {
                            errors.password = 'Required'
                            }
                            if (!values.confirm) {
                            errors.confirm = 'Required'
                            } else if (values.confirm !== values.password) {
                            errors.confirm = 'Must match'
                            }
                            return errors
                        }}
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                                <div className = {s.input__wrapper} >
                                    <Field name="email">
                                        {({ input, meta }) => (
                                        <div className = {s.input__row} >
                                            <input className = {"form-control"} {...input} type="email" placeholder="Email" />
                                            <span className = {s.error} >{meta.error && meta.touched && <span>{meta.error}</span>}</span>
                                        </div>
                                        )}
                                    </Field>
                                </div>
                                <div className = {s.input__wrapper} >
                                    <Field name="password">
                                        {({ input, meta }) => (
                                        <div className = {s.input__row} >
                                            <input className = {"form-control"} {...input} type="password" placeholder="Password" />
                                            <span className = {s.error} >{meta.error && meta.touched && <span>{meta.error}</span>}</span>
                                        </div>
                                        )}
                                    </Field>
                                </div>
                                <div className = {s.input__wrapper} >
                                    <Field name="confirm">
                                        {({ input, meta }) => (
                                        <div className = {s.input__row} >
                                            <input className = {"form-control"} {...input} type="password" placeholder="Confirm" />
                                            <span className = {s.error} > {meta.error && meta.touched && <span>{meta.error}</span>}</span>
                                        </div>
                                        )}
                                    </Field>
                                </div>
                                <div>
                                    { props.captchaUrl && <img alt = "Captcha" src = {props.captchaUrl} /> }
                                    { props.captchaUrl && 
                                        <div className = {s.captcha_input} >
                                            <Field name="captcha">
                                                {({ input, meta }) => (
                                                <div className = {s.input__row} >
                                                    <input className = {"form-control"} {...input} type="text" placeholder="captcha" />
                                                    <span className = {s.error} >{meta.error && meta.touched && <span>{meta.error}</span>}</span>
                                                </div>
                                                )}
                                            </Field> 
                                        </div>
                                    }
                                </div>
                                <div className = {s.error__message} >
                                    { props.error && props.error }
                                </div>
                                <div className={s.buttons__row}>
                                    <button className = {s.btn} type="submit" disabled={submitting}>
                                        Submit
                                    </button>
                                    <button className = {s.btn} type="button" onClick={form.reset} disabled={submitting || pristine}>
                                        Reset
                                    </button>
                                </div>
                            </form>
                        )}
                    />
                </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
        error: state.auth.error,
    }
}

export default connect (mapStateToProps, {login} )(LoginForm);