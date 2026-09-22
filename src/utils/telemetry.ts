// Empty telemetry placeholder as requested in the task description if logging events
export const logEvent = (name: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Telemetry] ${name}`, data);
  }
};
