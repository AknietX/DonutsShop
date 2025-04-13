import axios from 'axios';

// Замените на ваш URL и публичный API-ключ
const supabaseUrl = 'https://qyyfcytapjknuoojtmsp.supabase.co';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5eWZjeXRhcGprbnVvb2p0bXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NzAwNDksImV4cCI6MjA2MDA0NjA0OX0.lpWGUPyAqsk-Le5jOnGr_Rp9A_8ZWtiH-l7mCXGActo';

const axiosInstance = axios.create({
  baseURL: `${supabaseUrl}/rest/v1`, // URL для работы с REST API Supabase
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`, // Для неаутентифицированных запросов используем ключ
    'Prefer': 'return=representation', // для получения данных после вставки
  }
});

export default axiosInstance;
