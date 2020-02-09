import React from 'react'
import QuestionPreview from './QuestionPreview'
import QuestionResults from './QuestionResults'
import QuestionVote from './QuestionVote'


function QuestionView(props) {
  const { question, viewType } = props

  const view = (viewType) => {
    switch(viewType) {
        case 'preview': return <QuestionPreview question={question} />
        case 'vote': return <QuestionVote question={question} />
        case 'poll': return <QuestionResults question={question} />
        default: return 'Error'
    }  
  }

  return view(viewType)
}

export default QuestionView