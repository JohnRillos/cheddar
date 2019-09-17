import React, { Component } from 'react';
import {
  Formik,
  Form,
  Field,
  // ErrorMessage, 
  FieldArray
} from 'formik';
import FormActionHandler from '../../modules/FormActionHandler';
// import Loader from '../Loader';
import SimpleButton from '../SimpleButton';
import './styles.css';

const buildField = (displayName, fieldName, isTextArea) => (
  <div className="namedField">
    <text>{`${displayName}: `}</text>
    <Field className="field" name={fieldName} component={isTextArea ? 'textarea' : 'input'} />
  </div>
)

const buildChoice = (arrayHelpers, index, arrayName) => (
  <div className="choice" key={index}>
    <div className="choiceHeader">
      {`Choice ${index + 1}: `}
      <SimpleButton styles="red" onClick={() => arrayHelpers.remove(index)} text="-" />
    </div>
    {buildField("Text", `${arrayName}.${index}.text`, true)}
    {buildField("Next Scene", `${arrayName}.${index}.nextScene`)}
  </div>
)

const buildChoiceArray = () => (
  // <div className="fieldArray">
    <FieldArray
      name="choices"
      render={arrayHelpers => (
        <div>
          <div className="choicesSectionHeader">
            <div>Choices</div>
            <SimpleButton onClick={() => arrayHelpers.push({ text: '', nextScene: '' })} text="+" />
          </div>
          {(arrayHelpers.form.values.choices || []).map((field, index) => (
            buildChoice(arrayHelpers, index, "choices")
          ))}
        </div>
      )}
    />
    // <br />
  // </div>
)

class FrameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {

      }
    };
  }

  componentDidMount() {
    return FormActionHandler.loadScene()
      .then(initialValues => this.setState({ initialValues }))
  }

  render() {
    if (!this.state.initialValues.topText) {
      return null;
    }
    return <div className='formContainer'>
      <Formik
        initialValues={this.state.initialValues}
        //   validate={values => {
        //     let errors = {};
        //     if (!values.email) {
        //       errors.email = 'Required';
        //     } else if (
        //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //     ) {
        //       errors.email = 'Invalid email address';
        //     }
        //     return errors;
        //   }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            FormActionHandler.submitSceneForm(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="fieldSections">
              <div className="column">
                {buildField("Scene Name", "sceneName")}
                {buildField("Top Text", "topText", true)}
                {buildField("Image", "imageFile")}
                {buildField("Bottom Text", "bottomText", true)}
              </div>
              <div className="column">
                {buildChoiceArray()}
              </div>
            </div>
            <SimpleButton styles="big" type="submit" disabled={isSubmitting} text="Submit" />
          </Form>
        )}
      </Formik>
    </div>
  }
}

export default FrameForm;