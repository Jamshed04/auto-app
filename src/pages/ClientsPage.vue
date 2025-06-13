<template>
  <div class="container">
    <h1 class="title">Клиенты</h1>

    <div class="search-box">
      <input type="text" placeholder="Поиск клиента..." class="search-input" />
    </div>

    <div class="client-list">
      <div
        v-for="client in uniqueClients"
        :key="client.id"
        class="client-item"
      >
        <span class="client-name">{{ client.lastName }} {{ client.firstName }}</span>
        <div class="client-actions">
          <span class="client-phone">{{ client.phone }}</span>
          <button class="icon-button" title="Редактировать">🖊️</button>
          <button class="icon-button" title="Удалить">❌</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useClientsStore } from '@/stores/clients'
import { computed } from 'vue'

const store = useClientsStore()
const clients = computed(() => store.clients)

const uniqueClients = computed(() => {
  const seen = new Set()
  return clients.value.filter(client => {
    const key = `${client.phone}-${client.lastName}-${client.firstName}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
})
</script>


<style scoped>
.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
}

.search-box {
  margin-bottom: 20px;
  text-align: left;
}

.search-input {
  width: 50%;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.client-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.client-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
}

.client-name {
  font-size: 18px;
  font-weight: 600;
}

.client-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.client-phone {
  font-size: 16px;
  color: #555;
}

.icon-button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.icon-button:hover {
  transform: scale(1.2);
}
</style>
