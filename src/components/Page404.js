import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button
} from '@material-ui/core'

function Page404() {

  return (
    <div>
    <Card >
      <CardHeader title="Page not found (Error 404)" />
      <CardContent>
      </CardContent>
      <CardActions>
        <Link to="/">
          <Button variant="contained" color="primary">Go to Homepage</Button>
        </Link>
      </CardActions>
    </Card>
    </div>
    )
}

export default Page404