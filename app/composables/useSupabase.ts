export type Provider = 'github' | 'google'

export function useSupabase() {
  const user = useSupabaseUser()
  const authClient = useSupabaseAuthClient()

  const router = useRouter()

  const hasUser = user.value !== null

  /**
   * ログイン
   * @param provider
   */
  async function login(provider: Provider) {
    const { error } = await authClient.auth.signInWithOAuth({ provider })
    if (error) alert('Something went wrong!')

    router.push('/')
  }

  /**
   * ログアウト
   */
  function logout() {
    authClient.auth.signOut()
  }

  return { hasUser, login, logout }
}
