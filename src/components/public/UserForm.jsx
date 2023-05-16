import React, { useEffect, useState } from 'react'
import { useUserForm } from '../../hooks/Custom.hooks'

export const UserForm = () => {

  const { form, setForm, handleChanges } = useUserForm();

  const [areEquals, setAreEquals] = useState(true);

  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value)
  }

  useEffect(() => {
    const { password } = form;
    setAreEquals(password === passwordConfirmation);
  }, [passwordConfirmation])

  const handleSubmit = (e) => {
    e.preventDefault();
    //UserService.save(form);
    console.log(e);
  }

  return (
    <div>
      Soy el UserForm
      <h2 className='mb-3'>Registrarte Terrestre</h2>
      <form className='needs-validation' action="" noValidate>

        <label htmlFor="email">Email</label>
        <br />
        <input
          className='form-control'
          type="email"
          name='email'
          placeholder='jhondoe@gmail.com'
          onChange={handleChanges}
        />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          className='form-control'
          type="password"
          name='password'
          onChange={handleChanges}
        />
        <br />
        <label htmlFor="password2">Repetir Password</label>
        <br />
        <input
          className='form-control'
          type="password"
          placeholder='Repetir Password'
          onChange={handlePasswordConfirmation}
        />
        { !areEquals && (
          <div className='form-text list-group-item-danger'>
            Las claves no son iguales
          </div>
        )}
        <br />
        <hr />
        <button
          disabled={!areEquals}
          type='submit'
          className='btn btn-primary'
          onClick={handleSubmit}
        >Registrarse</button>
      </form>


    </div>
  )
}
