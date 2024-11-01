import { onClickOutside } from '@vueuse/core'

export function useDropdown(dropdownRef: Ref<HTMLElement | null>) {
  const dropdownIsActive = ref(false)

  onClickOutside(dropdownRef, () => {
    closeDropdown()
  })

  function toggleDropdown() {
    dropdownIsActive.value = !dropdownIsActive.value
  }

  function closeDropdown() {
    dropdownIsActive.value = false
  }

  return {
    dropdownIsActive,

    toggleDropdown,
    closeDropdown,
  }
}
