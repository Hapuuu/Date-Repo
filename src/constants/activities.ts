// src/constants/activities.ts

/**
 * Central source of truth for all activities.
 * Add new ones here — everything else (checkboxes, confirmation text, typing) updates automatically.
 */
export const ActivityLabels = {
    coffee: 'Classic cozy coffee chat ☕',
    walk: 'Relaxing nature walk 🌳',
    beachWalk: 'Walk along the beach 🌊',
    sunset: 'Watch the sunset together 🌅',
    surprise: 'Surprise me! 🎉',
} as const;

// Type derived directly from the keys above — always in sync
export type ActivityKey = keyof typeof ActivityLabels;

/**
 * Natural-language versions used in the confirmation page summary.
 * Slightly different phrasing for better readability in sentences.
 */
export const ActivityConfirmationText = {
    coffee: 'a cozy coffee chat',
    walk: 'coffee + a relaxing nature walk',
    spa: 'coffee + Spa Ceylon-inspired fun',
    surprise: 'a sweet surprise',
} as const;