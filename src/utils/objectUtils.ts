// src/utils/objectUtils.ts

/**
 * Type-safe wrapper around Object.entries()
 * Works perfectly with `as const` objects and enums
 */
export function getEntries<T extends Record<string, unknown>>(
    obj: T
): [keyof T, T[keyof T]][] {
    return Object.entries(obj) as [keyof T, T[keyof T]][];
}

/**
 * Optional: Type-safe Object.values()
 */
export function getValues<T extends Record<string, unknown>>(obj: T): T[keyof T][] {
    return Object.values(obj) as T[keyof T][];
}