import { toast } from 'react-toastify';

// Define the type for toast variants
type ToastType = 'success' | 'error' | 'info' | 'warning';

// Custom Toast Function with toastId
export const showToast = (type: ToastType, message: string, toastId: string) => {
  // Check if the toast already exists with the same ID
  if (!toast.isActive(toastId)) {
    switch (type) {
      case 'success':
        toast.success(message, {
          toastId,      // Pass the toastId to prevent duplicate toasts
          autoClose: 3000,
        });
        break;
      case 'error':
        toast.error(message, {
          toastId,      // Use the same toastId
          autoClose: 3000,
        });
        break;
      case 'info':
        toast.info(message, {
          toastId,
          autoClose: 3000,
        });
        break;
      case 'warning':
        toast.warn(message, {
          toastId,
          autoClose: 3000,
        });
        break;
      default:
        toast(message, {
          toastId,
          autoClose: 3000,
        });
        break;
    }
  }
};
