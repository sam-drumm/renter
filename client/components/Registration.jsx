import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../apis/users'
import { setWaiting, clearWaiting } from '../actions/waiting'

function Registration () {
  const user = useSelector(state => state.user)
  const history = useNavigate()
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    auth0Id: '',
    email: '',
    nickname: ''
  })

  useEffect(() => {
    setForm({
      auth0Id: user.auth0Id,
      nickname: user.nickname,
      email: user.email

    })
  }, [user])

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  async function handleClick (e) {
    e.preventDefault()
    dispatch(setWaiting())
    // registerUser(form, authUser, history.push)
    try {
      await addUser(form)
      history('/rentalform')
      dispatch(clearWaiting())
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='form'>
      <h2>Register Profile</h2>
      <form className='registration'>
        <label htmlFor='auth0Id'>auth0Id</label>
        <input
          name='auth0Id'
          value={form.auth0Id}
          onChange={handleChange}
          disabled={true}

        ></input>

        <label htmlFor='email' >Email</label>
        <input
          name='email'
          value={form.email}
          onChange={handleChange}
          disabled={true}
        ></input>

        <label htmlFor='nickname' >Nickname</label>
        <input
          name='nickname'
          value={form.nickname}
          onChange={handleChange}
        ></input>

        <button
          type='button'
          onClick={handleClick}
        >
          Register
        </button>
      </form>
      <p>Please note: your nickname is posted as the author of the Renter form.</p>
    </section>
  )
}

export default Registration
