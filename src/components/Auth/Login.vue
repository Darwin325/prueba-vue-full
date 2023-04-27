<script setup
    lang="ts"></script>

<template>
  <div class="login">
    <div class="content">
      <h4>Inicio de sesión</h4>

      <form @submit.prevent="">
        <div class="mb-3">
          <label for="exampleInputEmail1"
              class="form-label">Correo</label>
          <input type="email"
              class="form-control"
              name="email"
              id="email"
              required>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1"
              class="form-label">Contraseña</label>
          <input type="password"
              class="form-control"
              name="password"
              id="password"
              required>
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox"
              class="form-check-input"
              id="exampleCheck1">
          <label class="form-check-label"
              for="exampleCheck1">Recordarme</label>
        </div>

        <div class="d-grid gap-2">
          <button type="submit"
              class="btn btn-success">Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80vh;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.content {
  border: solid 1px #ccc;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

</style>
