import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.VITE_SUPABASE_URL,
  import.meta.VITE_SUPABASE_PUBLISHABLE_KEY,
);

export default supabase;
