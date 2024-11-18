export const reportError = ({ message }: { message?: string }) => {
  console.error(message ?? "An error occurred");
};
