// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qyyfcytapjknuoojtmsp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5eWZjeXRhcGprbnVvb2p0bXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NzAwNDksImV4cCI6MjA2MDA0NjA0OX0.lpWGUPyAqsk-Le5jOnGr_Rp9A_8ZWtiH-l7mCXGActo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

