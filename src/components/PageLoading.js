import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  LinearProgress
} from '@material-ui/core'

function PageLoading() {

  return (
    <div>
    <Card >
      <CardHeader
         title="Loading data..." 
         subheader="...please wait!"
      />
      <CardContent>
        <LinearProgress color="primary"/>
      </CardContent>
    </Card>
    </div>
    )
}

export default PageLoading