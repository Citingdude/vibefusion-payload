export const icons = {
  chevronDown: import('./ChevronDownIcon.vue'),
  chevronUp: import('./ChevronUpIcon.vue'),
  check: import('./CheckIcon.vue'),
}

export type Icon = keyof typeof icons
