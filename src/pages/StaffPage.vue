<template>
  <div class="container">
    <h1 class="title">Сотрудники</h1>

    <div class="search-box-with-button">
      <input
        type="text"
        placeholder="Поиск услуги..."
        class="search-input"
      />
      <button class="add-button" @click="onAddService">
        ➕ Добавить
      </button>
    </div>

    <div class="employee-list">
      <div
        v-for="employee in employees"
        :key="employee.id"
        class="employee-item"
      >
        <span class="employee-name">{{ employee.lastName }} {{ employee.firstName }}</span>
        <div class="employee-actions">
          <span class="employee-position">{{ employee.position }}</span>
          <button class="icon-button" title="Редактировать">🖊️</button>
          <button class="icon-button" title="Удалить">❌</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeesPage",
  data() {
    return {
      employees: [
        { id: 1, lastName: "Качкинов", firstName: "Эзен"},
        { id: 2, lastName: "Сивцев", firstName: "Владислав"},
        { id: 3, lastName: "Лощинов", firstName: "Цырен"},
        { id: 4, lastName: "Иванов", firstName: "Иван"},
        { id: 5, lastName: "Новиков", firstName: "Дмитрий"},
        { id: 6, lastName: "Козлов", firstName: "Андрей"},
        { id: 7, lastName: "Ненашев", firstName: "Константин"},
      ],
    };
  },
};
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

.employee-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.employee-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
}

.employee-name {
  font-size: 18px;
  font-weight: 600;
}

.employee-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.employee-position {
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

.add-button {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: #3b82f6;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.add-button:hover {
  background-color: #2563eb;
  transform: translateY(-1px);
}

.add-button:active {
  transform: translateY(1px);
}

.search-box-with-button {
  display: flex;
  align-items: center;
  gap: 540px;
  margin-bottom: 20px;
}
</style>
