<!-- <template>
  <div class="p-4 bg-gray-100 min-h-screen">
    <h2 class="text-2xl font-bold mb-6 text-center">Кухонный дисплей</h2>

    <div v-if="orders.length === 0" class="text-center py-10 text-gray-500">
      Нет активных заказов
    </div>

    <div v-for="order in orders" :key="order.order_id" class="bg-white p-4 rounded-lg shadow-lg mb-4 border-l-4 border-blue-500">
      <div class="flex justify-between items-start">
        <div>
          <p class="font-bold text-lg">Заказ #{{ order.order_id || '—' }}</p>
          <p class="text-gray-600 text-sm">{{ formatTime(order.created_at) }}</p>
        </div>
        <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
          В работе
        </span>
      </div>

      <div class="mt-3">
        <p class="font-semibold mb-2">Состав:</p>
        <ul class="space-y-1">
          <li v-for="(item, index) in order.items" :key="index" class="flex justify-between">
            <span>{{ item.name }}</span>
            <span class="font-bold">×{{ item.quantity }}</span>
          </li>
        </ul>
      </div>

      <div class="mt-4 pt-3 border-t flex justify-end gap-3">
        <button
          class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
          @click="markReady(order)"
        >
          Готов
        </button>
        <button
          class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition"
          @click="cancelOrder(order)"
        >
          Отменить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { io } from 'socket.io-client'

const orders = ref([])
let socket = null

// Инициализация WebSocket
function initSocket() {
  socket = io('http://localhost:3000', {
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000
  })

  socket.on('connect', () => {
    console.log('Connected to WebSocket server')
  })

  socket.on('new-order', (order) => {
    orders.value.unshift({
      ...order,
      created_at: new Date().toISOString()
    })
    saveOrders()
  })

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server')
  })

  socket.on('connect_error', (err) => {
    console.error('WebSocket connection error:', err)
  })
}

// Сохранение заказов в localStorage
function saveOrders() {
  localStorage.setItem('kitchen-orders', JSON.stringify(orders.value))
}

// Загрузка заказов из localStorage
function loadOrders() {
  const savedOrders = localStorage.getItem('kitchen-orders')
  if (savedOrders) {
    orders.value = JSON.parse(savedOrders)
  }
}

// Форматирование времени
function formatTime(isoString) {
  if (!isoString) return ''
  const date = new Date(isoString)
  return date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

function markReady(order) {
  // Отправка на сервер, что заказ готов
  if (socket) {
    socket.emit('order-ready', { order_id: order.order_id })
  }
  orders.value = orders.value.filter(o => o.order_id !== order.order_id)
  saveOrders()
}

function cancelOrder(order) {
  // Отправка на сервер, что заказ отменен
  if (socket) {
    socket.emit('order-cancel', { order_id: order.order_id })
  }
  orders.value = orders.value.filter(o => o.order_id !== order.order_id)
  saveOrders()
}

onMounted(() => {
  loadOrders()
  initSocket()
})

onBeforeUnmount(() => {
  if (socket) {
    socket.disconnect()
  }
})
</script>

<style scoped>
/* Улучшенные стили для кухонного дисплея */
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
}

button {
  min-width: 100px;
}

/* Анимация для новых заказов */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

div[class*="bg-white"] {
  animation: fadeIn 0.3s ease-out;
}
</style> -->
