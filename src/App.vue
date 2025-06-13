<!-- src/App.vue -->
<template>
  <div>
    <header class="app-header">
      <nav class="nav-links">
        <router-link to="/" exact-active-class="active">📅 Запись</router-link>
        <router-link to="/price" exact-active-class="active">📋 Прайс-лист</router-link>
        <router-link to="/clients" exact-active-class="active">👥 Клиенты</router-link>
        <router-link to="/staff" exact-active-class="active">🧑‍🔧 Сотрудники</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
.nav-links {
  display: flex;
  gap: 60px;
}
.nav-links a {
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}
.nav-links a.active {
  background-color: #e0e0e0;
  color: #007bff;
}</style>
