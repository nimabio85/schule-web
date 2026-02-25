export const isValidEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const sanitize = (value: string): string => value.replace(/\s+/g, " ").trim();

