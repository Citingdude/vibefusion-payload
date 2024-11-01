export default function useCanonicalURL(canonicalURL: string | undefined | null) {
  if (!canonicalURL)
    return

  return useHead({
    link: [{
      rel: 'canonical',
      href: canonicalURL,
    }],
  })
}
