
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { apiService } from '@/services/api';
import { ContactFormData } from '@/types';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().min(6, {
    message: "Please enter a valid phone number.",
  }),
  company: z.string().optional(),
  projectType: z.string().min(1, {
    message: "Please select a project type.",
  }),
  projectDetails: z.string().min(10, {
    message: "Project details must be at least 10 characters.",
  }),
  uploadSpec: z.any().optional(),
  preferredContactTime: z.string().optional(),
});

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      projectDetails: "",
      uploadSpec: undefined,
      preferredContactTime: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const formData: ContactFormData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        projectType: values.projectType,
        projectDetails: values.projectDetails,
        uploadSpec: values.uploadSpec instanceof File ? values.uploadSpec : undefined,
        preferredContactTime: values.preferredContactTime,
      };

      const response = await apiService.submitContactForm(formData);
       console.log("contact form submission response ", response)
      toast.success(response.message || "Thank you for your message! We'll be in touch shortly.");
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);

      console.log("Contact form submisstion errr ", error)
      toast.error("Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h2 className="text-3xl font-montserrat font-bold mb-6 text-primary-blue">
        Request a Quote
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Smith"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+64 123 456 789"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Company Ltd."
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Type*</FormLabel>
                <FormControl>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={isSubmitting}
                    {...field}
                  >
                    <option value="">Select a project type</option>
                    <option value="welding">Welding & Fabrication</option>
                    <option value="machining">Machining Operations</option>
                    <option value="equipment">Equipment Hire</option>
                    <option value="project-management">Project Management</option>
                    <option value="maintenance">Maintenance & Repair</option>
                    <option value="installation">Installation Services</option>
                    <option value="consulting">Engineering Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="projectDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Details*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe your project requirements, timeline, and specifications..."
                    className="min-h-[120px]"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="uploadSpec"
              render={({ field: { onChange, value, ...field } }) => (
                <FormItem>
                  <FormLabel>Upload Spec (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg"
                      disabled={isSubmitting}
                      onChange={(e) => onChange(e.target.files?.[0])}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferredContactTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Contact Time</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Mornings, Afternoons, Weekdays only"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent-yellow hover:bg-accent-yellow/90 text-primary-blue font-semibold py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
          </Button>
          <p className="text-xs text-gray-500 text-center pt-3">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </Form>
    </div>
  );
};
