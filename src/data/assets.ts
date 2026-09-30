// public/images 경로를 배포 base 경로에 맞춰 반환
export const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`
