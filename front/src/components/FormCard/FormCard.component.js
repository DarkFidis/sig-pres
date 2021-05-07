import React, { PureComponent } from 'react'
import { Card, CardTitle, CardText } from 'reactstrap';

class FormCard extends PureComponent {

  render() {
    const { children, title } = this.props
    return (
      <Card body className="message-form">
        <CardTitle tag="h5">{ title }</CardTitle>
        <CardText></CardText>
        { children }
      </Card>
    )
  }
}

export default FormCard
