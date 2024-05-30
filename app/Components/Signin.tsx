'use client'
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '@/lib/supabase/products'
import { ThemeSupa } from '@supabase/auth-ui-shared'


const Signin = () => {
  return (
    <div className='absolute top-0 w-full bg-white py-12'>
        <div className='mx-auto w-[24%]'>
        <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
  />
        </div>
      
    </div>
  )
}

export default Signin
