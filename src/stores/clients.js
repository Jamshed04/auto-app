import { defineStore } from 'pinia';

export const useClientsStore = defineStore('clients', {
  state: () => ({
    clients: [
    ]
  }),
  getters: {
    getClientById: (state) => (id) => state.clients.find(c => c.id === id),
  },
  actions: {
    addClient(client) {
      this.clients.push(client);
    },
    updateClient(updated) {
      const index = this.clients.findIndex(c => c.id === updated.id);
      if (index !== -1) this.clients[index] = updated;
    }
  },
  persist: true,
});
