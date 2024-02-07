import toast from "react-hot-toast";

const toastDuration = 5000;
const toastPosition = "top-right";

const notifySuccess = (successMessage: string) =>
  toast.success(successMessage, {
    duration: toastDuration,
    position: toastPosition,
  });

const notifyError = (errorMessage: string) =>
  toast.error(errorMessage, {
    duration: toastDuration,
    position: toastPosition,
  });

const notifyInfo = (infoMessage: string) =>
  toast.success(infoMessage, {
    duration: toastDuration,
    position: toastPosition,
  });

const notifyLoading = (toastMessage: string): string =>
  toast.loading(toastMessage, {
    position: toastPosition,
  });

export { notifyError, notifyInfo, notifyLoading, notifySuccess };
