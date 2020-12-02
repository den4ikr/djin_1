import { Form, Field } from "react-final-form";
import s from "./ProfileDataForm.module.scss";

const ProfileDataForm = (props) => {

    return (
        <div>
            <Form
                onSubmit={props.onSubmit}
                initialValues={ props.profile }
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                    <div className = {s.input__block} >
                        <div>
                            <label>Full Name: </label>
                        </div>
                        <Field
                        name="fullName"
                        component="input"
                        type="text"
                        />
                    </div>
                    <div>
                        <div>
                            <label>Looking for a job: </label>
                        </div>
                        <Field
                        name="lookingForAJob"
                        component="input"
                        type="checkbox"
                        />
                    </div>
                    <div>
                        <div>
                            <label>LookingForAJobDescription: </label>
                        </div>
                        <Field 
                        name="lookingForAJobDescription"
                        component="input"
                        type="text"
                        />
                    </div>
                    <div>
                        <div>
                            <label>About Me: </label>
                        </div>
                        <Field
                        name="aboutMe"
                        component="input"
                        type="text"
                        />
                    </div>
                    <div>
                        <b>Conatcts: </b> 
                        <div>
                            Example: https://facebook.com
                        </div>
                        {Object.keys (props.profile.contacts).map (key => {
                            return (
                                <div className = {s.contact__item} >
                                    <div className = {s.key} >
                                        {key}:    
                                    </div> <Field name = {"contacts." + key} component = 'input' type = "text" />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <button className = {s.edit__btn} >SAVE</button>
                    </div>
                    {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                    </form>
                )}
                />
        </div>
    )
}

export default ProfileDataForm;