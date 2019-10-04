import React, { Component } from 'react';
import {
  Formik,
  Form,
  Field,
  // ErrorMessage, 
  FieldArray
} from 'formik';
import FormActionHandler from '../../modules/FormActionHandler';
import SimpleButton from '../SimpleButton';
import ErrorBanner from '../ErrorBanner';
import './styles.css';

const buildField = (displayName, fieldName, isTextArea) => (
  <div className="namedField">
    <div>{`${displayName}: `}</div>
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
  <FieldArray
    name="choices"
    render={arrayHelpers => (
      <div>
        <div className="choicesSectionHeader">
          <div className="sectionHeaderLabel">Choices</div>
          <SimpleButton onClick={() => arrayHelpers.push({ text: '', nextScene: '' })} text="+" />
        </div>
        {(arrayHelpers.form.values.choices || []).map((field, index) => (
          buildChoice(arrayHelpers, index, "choices")
        ))}
      </div>
    )}
  />
)

class SceneForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: undefined,
    };
  }

  componentDidMount() {
    try {
      return this.setState({
        loaded: true
      });
    } catch (error) {
      return this.setState({ error })
    }
  }

  render() {
    if (this.state.error) {
      return <ErrorBanner message={this.state.error.message} />
    }
    if (!this.state.loaded) {
      return null;
    }
    return <div className='formContainer'>
      <Formik
        initialValues={this.props.initialValues}
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
        enableReinitialize
        initialStatus={{ savedValues: this.props.initialValues }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          setTimeout(() => {
            FormActionHandler.submitSceneForm(values);
            setSubmitting(false);
            setStatus({ savedValues: values });
          }, 400);
        }}
      >
        {(props) => (
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
            <div className="row-right">
              <SimpleButton
                styles="big"
                type="submit"
                disabled={props.isSubmitting || (props.status.savedValues === props.values)}
                text="Save Scene"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  }
}

export default SceneForm;