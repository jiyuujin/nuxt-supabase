import { User } from '@supabase/gotrue-js'
import { Ref } from 'vue'
import { Database } from '~~/schema'

export interface UseSupabaseFormProps {
  user: Ref<User | null>
}

export function useSupabaseForm({ user }: UseSupabaseFormProps) {
  const client = useSupabaseClient<Database>()

  const userId = user.value?.id
  const provider = user.value?.app_metadata.provider || ''
  const email = user.value?.email || ''
  const fullName = user.value?.user_metadata.full_name
  const avatarUrl = user.value?.user_metadata.avatar_url

  async function addEventUser(secretWord: string, receiptId: string) {
    const userData = {
      user_id: userId,
      provider: provider,
      email: email,
      full_name: fullName,
      avatar_url: avatarUrl,
      secret_word: secretWord,
      receipt_id: receiptId,
    }

    const { error } = await client.from('event_users').insert(userData)
    if (error) throw error
  }

  return { addEventUser }
}
