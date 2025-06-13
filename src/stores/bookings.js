import { defineStore } from 'pinia';

export const useBookingsStore = defineStore('bookings', {
  state: () => ({
    bookings: [
    ]
  }),
  persist: true,
  getters: {
    getBookingsByClient: (state) => (clientId) =>
      state.bookings.filter(b => b.clientId === clientId),
  },
  actions: {
  addBooking(booking) {
    booking.id = Date.now();
    this.bookings.push(booking);
  },

  updateBooking(updated) {
    const index = this.bookings.findIndex(b => b.id === updated.id);
    if (index !== -1) this.bookings[index] = updated;
  },

  deleteBooking(id) {
    this.bookings = this.bookings.filter(b => b.id !== id);
  }
}
});
