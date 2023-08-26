import React from 'react'

import { AnecdoteTypeWithId } from '../Types'

const Anecdote = ({
  anecdote,
  handleVote,
}: {
  anecdote: AnecdoteTypeWithId | null | undefined
  handleVote: (a: number) => void
}) => {
  return anecdote ? (
    <div>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>
      has {anecdote.votes} votes
      <br />
      <button onClick={() => handleVote(anecdote.id)}>vote</button>
      <br />
      for more info see <a href={anecdote.info}>{anecdote.info}</a>
    </div>
  ) : (
    <></>
  )
}

export default Anecdote

