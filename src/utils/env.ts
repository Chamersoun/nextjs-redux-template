const envVars = {
  env: process.env.NEXT_PUBLIC_ENV ?? "",
  isServerSide: typeof window === "undefined",
  apiUri: process.env.NEXT_PUBLIC_API_URI ?? "",
};

export default envVars;
