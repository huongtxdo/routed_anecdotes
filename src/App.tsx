import React, { useState } from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'

import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

import { AnecdoteType, AnecdoteTypeWithId } from './Types'
import About from './components/About'
import Menu from './components/Menu'
import Anecdote from './components/Anecdote'
import CreateNew from './components/CreateNew'
import Footer from './components/Footer'

const App = () => {
  const [anecdotes, setAnecdotes] = useState<AnecdoteTypeWithId[]>([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1,
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2,
    },
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote: AnecdoteType) => {
    const id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat({ ...anecdote, id }))
    setNotification(`a new anecdote '${anecdote.content}' created!`)
    setTimeout(() => {
      setNotification('')
    }, 5000)
  }

  const anecdoteById = (id: Number) => anecdotes.find((a) => a.id === id)

  const vote = (id: Number) => {
    const anecdote = anecdoteById(id)

    if (anecdote) {
      const voted = {
        ...anecdote,
        votes: anecdote.votes + 1,
      }

      setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)))
    } else return
  }

  const match = useMatch('/anecdotes/:id')
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : null

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notification message={notification as String} />
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={anecdote} handleVote={vote} />}
        />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

