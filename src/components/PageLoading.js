import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Button
} from '@material-ui/core'

function PageLoading() {

  return (
    <div>
    <Card >
      <CardHeader
         title="Loading data..." 
         subtitle="...please wait!"
      />
      <CardContent>
        <LinearProgress color="primary"/>
      </CardContent>
    </Card>
    </div>
    )
}

export default PageLoading