
import React, { useState } from 'react';
import { X, Upload, File, Link2 } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { apiService } from '@/services/api';
import { JobApplicationData } from '@/types';

const JobApplicationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [cvOption, setCvOption] = useState<'upload' | 'gdrive' | 'dropbox'>('upload');
  const [googleDriveLink, setGoogleDriveLink] = useState('');
  const [dropboxLink, setDropboxLink] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
  });

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.position) {
        toast.error('Please fill in all required fields.');
        return;
      }

      // Validate CV option specific requirements
      if (cvOption === 'upload' && !uploadedFile) {
        toast.error('Please upload your CV file.');
        return;
      }

      if (cvOption === 'gdrive' && !googleDriveLink.trim()) {
        toast.error('Please provide your Google Drive link.');
        return;
      }

      if (cvOption === 'dropbox' && !dropboxLink.trim()) {
        toast.error('Please provide your Dropbox link.');
        return;
      }

      const applicationData: JobApplicationData = {
        ...formData,
        cvOption,
        cvFile: cvOption === 'upload' ? uploadedFile! : undefined,
        googleDriveLink: cvOption === 'gdrive' ? googleDriveLink : undefined,
        dropboxLink: cvOption === 'dropbox' ? dropboxLink : undefined,
        coverLetter: formData.coverLetter || undefined,
      };

      const response = await apiService.submitJobApplication(applicationData);

      toast.success(response.message || 'Application submitted successfully!');
      setIsOpen(false);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        coverLetter: '',
      });
      setUploadedFile(null);
      setCvOption('upload');
      setGoogleDriveLink('');
      setDropboxLink('');
    } catch (error) {
      console.error('Application submission error:', error);
      toast.error('Failed to submit application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hidden trigger button for programmatic clicking */}
      <button
        id="job-application-trigger"
        onClick={() => setIsOpen(true)}
        className="hidden"
        aria-hidden="true"
      />

      {/* Trigger button */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="bg-accent-yellow hover:bg-accent-yellow/90 text-primary-blue font-semibold shadow-lg rounded-full px-8 py-4"
        >
          Apply Now
        </Button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm ${isSubmitting ? 'pointer-events-none' : ''}`}
            onClick={() => !isSubmitting && setIsOpen(false)}
          ></div>

          {/* Modal content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-montserrat font-bold text-primary-blue">
                Submit Your Application
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
                className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-open-sans font-medium text-secondary-grey mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleFormChange('firstName', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-open-sans focus:ring-2 focus:ring-accent-yellow focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label className="block font-open-sans font-medium text-secondary-grey mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleFormChange('lastName', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-open-sans focus:ring-2 focus:ring-accent-yellow focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-open-sans font-medium text-secondary-grey mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-open-sans focus:ring-2 focus:ring-accent-yellow focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label className="block font-open-sans font-medium text-secondary-grey mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-open-sans focus:ring-2 focus:ring-accent-yellow focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                    required
                  />
                </div>
              </div>

              {/* Position */}
              <div>
                <label className="block font-open-sans font-medium text-secondary-grey mb-2">
                  Position of Interest *
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => handleFormChange('position', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 font-open-sans focus:ring-2 focus:ring-accent-yellow focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  <option value="">Select a position</option>
                  <option value="welder">Welder</option>
                  <option value="fabricator">Fabricator</option>
                  <option value="machine-operator">Machine Operator</option>
                  <option value="project-supervisor">Project Supervisor</option>
                  <option value="general-labour">General Labour</option>
                </select>
              </div>

              {/* CV Upload Options */}
              <div>
                <label className="block font-open-sans font-medium text-secondary-grey mb-4">
                  Upload CV *
                </label>

                {/* Option Selection */}
                <div className="flex space-x-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setCvOption('upload')}
                    disabled={isSubmitting}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                      cvOption === 'upload'
                        ? 'bg-accent-yellow text-primary-blue'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Upload File
                  </button>
                  <button
                    type="button"
                    onClick={() => setCvOption('gdrive')}
                    disabled={isSubmitting}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                      cvOption === 'gdrive'
                        ? 'bg-accent-yellow text-primary-blue'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Google Drive
                  </button>
                  <button
                    type="button"
                    onClick={() => setCvOption('dropbox')}
                    disabled={isSubmitting}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                      cvOption === 'dropbox'
                        ? 'bg-accent-yellow text-primary-blue'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Dropbox
                  </button>
                </div>

                {/* File Upload Option */}
                {cvOption === 'upload' && (
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                      dragOver
                        ? 'border-accent-yellow bg-accent-yellow/5'
                        : 'border-gray-300 hover:border-accent-yellow'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    {uploadedFile ? (
                      <div className="flex items-center justify-center space-x-2 text-accent-yellow">
                        <File className="h-6 w-6" />
                        <span className="font-open-sans">{uploadedFile.name}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="font-open-sans text-secondary-grey mb-2">
                          Drag and drop your CV here, or click to browse
                        </p>
                        <p className="font-open-sans text-sm text-gray-500">
                          Supported formats: PDF, DOC, DOCX (Max 5MB)
                        </p>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileSelect}
                          className="hidden"
                          id="cv-upload"
                          disabled={isSubmitting}
                        />
                        <label
                          htmlFor="cv-upload"
                          className={`inline-block mt-4 bg-accent-yellow text-primary-blue px-6 py-2 rounded-lg font-semibold cursor-pointer hover:bg-accent-yellow/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${isSubmitting ? 'pointer-events-none' : ''}`}
                        >
                          Choose File
                        </label>
                      </>
                    )}
                  </div>
                )}

                {/* Google Drive Link Option */}
                {cvOption === 'gdrive' && (
                  <div className="border border-gray-300 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Link2 className="h-5 w-5 text-accent-yellow" />
                      <span className="font-open-sans font-medium text-secondary-grey">
                        Google Drive Link
                      </span>
                    </div>
                    <input
                      type="url"
                      value={googleDriveLink}
                      onChange={(e) => setGoogleDriveLink(e.target.value)}
                      placeholder="https://drive.google.com/file/d/..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-open-sans focus:ring-2 focus:ring-accent-yellow focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                      required
                    />
                    <p className="font-open-sans text-sm text-gray-500 mt-2">
                      Please ensure the file is set to "Anyone with the link can view"
                    </p>
                  </div>
                )}

                {/* Dropbox Link Option */}
                {cvOption === 'dropbox' && (
                  <div className="border border-gray-300 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Link2 className="h-5 w-5 text-accent-yellow" />
                      <span className="font-open-sans font-medium text-secondary-grey">
                        Dropbox Link
                      </span>
                    </div>
                    <input
                      type="url"
                      value={dropboxLink}
                      onChange={(e) => setDropboxLink(e.target.value)}
                      placeholder="https://www.dropbox.com/s/..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-open-sans focus:ring-2 focus:ring-accent-yellow focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                      required
                    />
                    <p className="font-open-sans text-sm text-gray-500 mt-2">
                      Please ensure the file is set to public or accessible via link
                    </p>
                  </div>
                )}
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block font-open-sans font-medium text-secondary-grey mb-2">
                  Cover Letter (Optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.coverLetter}
                  onChange={(e) => handleFormChange('coverLetter', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 font-open-sans focus:ring-2 focus:ring-accent-yellow focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  placeholder="Tell us about your experience and why you'd like to join IK Engineering..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  disabled={isSubmitting}
                  className="disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-blue hover:bg-primary-blue/90 text-white disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JobApplicationModal;
