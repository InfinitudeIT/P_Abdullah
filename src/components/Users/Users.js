import React from 'react'
import './Users.css'

function Users() {
  return (
    <>
    <div>
        <div class="form-container">
      <h2>Create New User</h2>
      <form>
          <div class="form-group">
              <label for="username">User Name:&nbsp;</label>
              <input type="text" id="username" name="username" placeholder="User Name"/>
          </div>
          <div class="form-group">
              <label for="email">Email Address:&nbsp;</label>
              <input type="email" id="email" name="email" placeholder="Email Address"/>
          </div>
          <div class="form-group">
              <label for="password">Create Password:&nbsp;</label>
              <input type="password" id="password" name="password" placeholder="Create Password"/>
          </div>
          <div class="form-group">
              <label for="confirm-password">Re-enter Password:&nbsp;</label>
              <input type="password" id="confirm-password" name="confirm-password" placeholder="Re-enter Password"/>
          </div>
          <div class="form-actions">
              <button type="submit">Create user:&nbsp;</button>
          </div>
      </form>
  </div>
  
      </div>

    </>  
  )
}

export default Users
