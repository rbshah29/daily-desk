interface ZenQuote {
  q: string
  a: string
  h?: string
}

export default defineEventHandler(async () => {
  return await $fetch<ZenQuote[]>('https://zenquotes.io/api/random')
})
