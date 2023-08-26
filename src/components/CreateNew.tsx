import React, { FormEvent } from 'react'

import { AddNew, CustomInputProps } from '../Types'
import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks'

const CustomInput = (props: CustomInputProps) => (
  <input value={props.value} onChange={props.onChange} />
)

const CreateNew = ({ addNew }: AddNew) => {
  const navigate = useNavigate()

  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    })
    navigate('/')
  }

  const handleReset = () => {
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <CustomInput {...content} />
        </div>
        <div>
          author
          <CustomInput {...author} />
        </div>
        <div>
          url for more info
          <CustomInput {...info} />
        </div>
        <button>create</button>
        <button type="button" onClick={handleReset}>
          reset
        </button>
      </form>
    </div>
  )
}

export default CreateNew

