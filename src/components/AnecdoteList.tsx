import React from 'react'
import { Link } from 'react-router-dom'

import { AnecdoteTypeWithId } from '../Types'

const AnecdoteList = ({ anecdotes }: { anecdotes: AnecdoteTypeWithId[] }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default AnecdoteList

