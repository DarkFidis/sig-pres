import React, { PureComponent } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from 'formik'

class PathForm extends PureComponent {

  submit = (values, actions) => {
    this.props.findPath(values.mode)
  }

  render() {
    const { showNetwork, toggleNetwork } = this.props
    return (
      <div>
        <Formik
          onSubmit={this.submit}
          initialValues={{mode: 'distance'}}
        >
          {({ values, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="mode">Paramètre de l'itinéraire</Label>
                <Input
                  type="select"
                  name="mode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values.mode}
                >
                  <option value='distance'>Distance</option>
                  <option value='time'>Temps</option>
                </Input>
                <br/>
                <Button type="submit" color="info">Itinéraire</Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
        { showNetwork ? (
          <Button color="warning" onClick={toggleNetwork}>Masquer le réseau</Button>
        ) : (
          <Button color="success" onClick={toggleNetwork}>Afficher le réseau</Button>
        )}
      </div>
    )
  }
}

export default PathForm
