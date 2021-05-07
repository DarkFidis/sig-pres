import React, { PureComponent } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from 'formik'

class NearRequestForm extends PureComponent {

  submit = (values, actions) => {
    this.props.requestSubmitter(values)
  }

  render() {
    return (
      <Formik
        onSubmit={this.submit}
        initialValues={{minDistance: 0, maxDistance: 10000}}
      >
        {({ values, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="minDistance">Distance minimale</Label>
              <Input
                type="number"
                name="minDistance"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.name}
              />
              <Label for="maxDistance">Distance maximale</Label>
              <Input
                type="number"
                name="maxDistance"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.message}
              />
              <br/>
              <Button type="submit" color="info" disabled={!this.props.origin }>Send</Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    )
  }
}

export default NearRequestForm
