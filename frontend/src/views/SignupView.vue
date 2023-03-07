<script setup>
import { reactive } from 'vue'
import { useSignupStore } from '@/stores/SignupStore'
import router from '../router/index'
import { computed } from 'vue'

const signupStore = useSignupStore()
//data
const state = reactive({
  error: false,
  errorList: [
    {
      type: 'username_req',
      message: 'Username is required',
      error: true
    },
    {
      type: 'password_req',
      message: 'Password is required',
      error: true
    },
    {
      type: 'email_req',
      message: 'Email is required',
      error: true
    },
    {
      type: 'username_taken',
      message: 'Username has already been taken',
      error: false
    },
    {
      type: 'email_taken',
      message: 'Email has already been taken',
      error: false
    },
    {
      type: 'password_len',
      message: 'Password needs to be at least 4 characters long',
      error: false
    }
  ],
  usernameInput: '',
  passwordInput: '',
  emailInput: ''
})

//methods

const signup = async () => {
  const username_req = state.errorList.find((error) => error.type === 'username_req')
  const password_req = state.errorList.find((error) => error.type === 'password_req')
  const email_req = state.errorList.find((error) => error.type === 'email_req')
  const username_taken = state.errorList.find((error) => error.type === 'username_taken')
  const email_taken = state.errorList.find((error) => error.type === 'email_taken')
  const password_len = state.errorList.find((error) => error.type === 'password_len')

  username_req.error = state.usernameInput ? false : true
  username_taken.error = !state.usernameInput ? false : username_taken.error
  password_req.error = state.passwordInput ? false : true
  email_req.error = state.emailInput ? false : true
  email_taken.error = !state.emailInput ? false : email_taken.error
  password_len.error = !state.passwordInput || state.passwordInput.length >= 4 ? false : true

  if (!username_req.error && !password_req.error && !email_req.error && !password_len.error) {
    try {
      state.error = false
      await signupStore.signup(state)
      username_taken.error = false
      email_taken.error = false
      router.push('/login')
    } catch (error) {
      state.error = true
      if (error.response.data.error === 'user and email already exist') {
        username_taken.error = true
        email_taken.error = true
      } else if (error.response.data.error === 'username already exist') {
        username_taken.error = true
        email_taken.error = false
      } else if (error.response.data.error === 'email already exist') {
        username_taken.error = false
        email_taken.error = true
      }
    }
  } else state.error = true
}
</script>
<template>
  <div class="container">
    <div class="panel">
      <div class="title">
        <p>Benefits of being a member</p>
      </div>
      <ul class="list">
        <div class="listBox">
          <span>&#x2713;</span>
          <li>Find something to watch on your subscribed streaming services</li>
        </div>
        <div class="listBox">
          <span>&#x2713;</span>
          <li>Log the movies and TV shows you have watched</li>
        </div>
        <div class="listBox">
          <span>&#x2713;</span>
          <li>
            Keep track of your favourite movies and TV shows and get recommendations from them
          </li>
        </div>
        <div class="listBox">
          <span>&#x2713;</span>
          <li>Build and maintain a personal watchlist</li>
        </div>
        <div class="listBox">
          <span>&#x2713;</span>
          <li>Build custom mixed lists (movies and TV)</li>
        </div>
        <div class="listBox">
          <span>&#x2713;</span>
          <li>Take part in movie and TV discussions</li>
        </div>
        <div class="listBox">
          <span>&#x2713;</span>
          <li>Contribute to, and improve the information in our database</li>
        </div>
      </ul>
    </div>
    <div class="signupForm">
      <div>
        <h2>Sign up for an account</h2>
        <p>
          Signing up for an account is free and easy. Fill out the form below to get started.
          JavaScript is required to to continue.
        </p>
      </div>
      <div class="errorCard" v-if="state.error">
        <div class="errorTitle">
          <p>&#33; There was an error processing your signup</p>
        </div>
        <div class="errorDetails">
          <ul>
            <li v-for="error in state.errorList.filter((list) => list.error)" :key="error.message">
              {{ error.message }}
            </li>
          </ul>
        </div>
      </div>
      <form>
        <div class="box">
          <label for="">Username</label>
          <InputText type="text" v-model="state.usernameInput" />
        </div>
        <div class="box">
          <label for="">Password (4 characters minimum)</label>
          <PasswordInput v-model="state.passwordInput" :toggleMask="true" :feedback="false" />
        </div>
        <div class="box">
          <label for="">Email</label>
          <InputText type="email" v-model="state.emailInput" />
        </div>
      </form>
      <p>
        By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB
        terms of use and privacy policy.
      </p>
      <div class="btn">
        <button class="sign" @click="signup">Sign Up</button>
        <button @click="$router.push('/')" class="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  gap: 3.6rem;
  width: 100%;
  max-width: 130rem;
  min-height: calc(100vh - var(--footerHeight) - var(--navHeight));
  margin: 0 auto;
  padding: 2.4rem;
  letter-spacing: 0.6px;
}

.panel {
  display: flex;
  flex-direction: column;
  min-height: 50%;
  height: 62rem;
  width: 27.3rem;
  min-width: 27.3rem;
  border-radius: var(--imageBorderRadius);
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  overflow: hidden;
}

.panel .title {
  width: 100%;
  height: 15%;
  padding: 2rem;
  color: #fff;
  font-size: 2.2rem;
  background-color: rgba(var(--tmdbLightBlue));
}

.list {
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.4rem;
  font-size: 1.6rem;
  list-style: none;
}

.listBox {
  display: flex;
  gap: 0.6rem;
  color: #333;
}

.listBox span {
  font-size: 2rem;
  color: #000;
}

.signupForm {
  width: 102.7rem;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  font-size: 1.5rem;
}

.signupForm h2 {
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: #222;
}

form .box {
  display: flex;
  flex-direction: column;
}

.box input,
::v-deep(.p-password input) {
  height: 4rem;
  width: 100%;
  padding: 1rem;
  font-size: 1.6rem;
  color: #444;
}
::v-deep(.p-password i) {
  font-size: 2rem;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
}
.btn button {
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: var(--imageBorderRadius);
  padding: 0.8rem 1.6rem;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
}

.sign {
  color: #fff;
  background-color: rgba(var(--tmdbLightBlue));
}

.cancel {
  color: rgba(var(--tmdbLightBlue));
  background-color: transparent;
}

.sign:hover {
  background-color: black;
}

.errorCard {
  width: 100%;
  border-radius: var(--imageBorderRadius);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
}
.errorTitle {
  display: flex;
  align-items: center;
  padding-left: 2rem;
  color: #fff;
  background-color: rgba(var(--accountRed), 1);
  height: 5.6rem;
  font-size: 1.8rem;
  font-weight: 600;
}
.errorDetails {
  padding: 1.6rem;
  padding-left: 4rem;
}
.errorDetails li:not(:last-child) {
  margin-bottom: 0.8rem;
}
</style>
