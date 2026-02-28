// API Response types
export interface ApiResponse<T = Record<string, unknown>> {
  success?: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  projectDetails: string;
  uploadSpec?: File;
  preferredContactTime?: string;
}

// Job application form data
export interface JobApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  cvOption: "upload" | "gdrive" | "dropbox";
  cvFile?: File;
  googleDriveLink?: string;
  dropboxLink?: string;
  coverLetter?: string;
}
