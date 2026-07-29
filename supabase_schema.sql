-- ============================================================================
-- Supabase Database Schema for English Learning App
-- Run this SQL script in your Supabase SQL Editor (https://supabase.com/dashboard)
-- ============================================================================

-- 1. Create table for storing application state & progress
CREATE TABLE IF NOT EXISTS public.user_app_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT DEFAULT 'default_user',
    data_key TEXT UNIQUE NOT NULL,
    data_value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.user_app_data ENABLE ROW LEVEL SECURITY;

-- 3. Create policies for public/anon access
DROP POLICY IF EXISTS "Allow public read access" ON public.user_app_data;
CREATE POLICY "Allow public read access" ON public.user_app_data
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public insert access" ON public.user_app_data;
CREATE POLICY "Allow public insert access" ON public.user_app_data
    FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public update access" ON public.user_app_data;
CREATE POLICY "Allow public update access" ON public.user_app_data
    FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Allow public delete access" ON public.user_app_data;
CREATE POLICY "Allow public delete access" ON public.user_app_data
    FOR DELETE USING (true);

-- 4. Create Index for fast lookups by data_key
CREATE INDEX IF NOT EXISTS idx_user_app_data_key ON public.user_app_data(data_key);
