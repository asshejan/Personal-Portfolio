export interface ContactFormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export function validateContactForm(data: Partial<ContactFormData>): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.reason || data.reason.trim() === "") {
    errors.reason = "Please select a inquiry reason.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
