export const isDemoMode = () => process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export const getBasePath = () => process.env.NEXT_PUBLIC_BASE_PATH ?? '';
