
export const sleep = (ms = 1000) => new Promise(res => setTimeout(res , ms))

export const encode = (text: string) => (new TextEncoder().encode(text))

export const clone = (value: any) => JSON.parse(JSON.stringify(value))