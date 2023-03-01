<template>
  <div className="container mx-auto">
    <h2 className="text-center text-2xl font-bold">Welcome!</h2>
    <div className="flex justify-center my-4">
      <router-link id="signup" to="/sign-up" className="mx-4 text-blue-700 hover:text-blue-500">Sign Up</router-link>
      <router-link id="login" to="/login" className="mx-4 text-blue-700 hover:text-blue-500">Login</router-link>
    </div>
  </div>
</template>