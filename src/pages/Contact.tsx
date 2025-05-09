import { useEffect, useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  business: string;
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xovdwzdv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Thanks for reaching out!",
        description: "We'll get back to you within 24 hours to start your launch.",
      });

      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at hello@launchab.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-launchab-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Ready to Launch?</h1>
            <p className="text-xl text-white/80">
              Let's get your business online, seen, and growing — fast.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0A2540]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Field Template */}
              {[
                { id: 'name', label: 'Full Name', type: 'text', required: 'Name is required' },
                { id: 'email', label: 'Email Address', type: 'email', required: 'Email is required' },
                { id: 'phone', label: 'Phone Number', type: 'tel', required: 'Phone number is required' },
                { id: 'business', label: 'Business Name', type: 'text', required: 'Business name is required' },
              ].map(({ id, label, type, required }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                    {label}
                  </label>
                  <Input
                    id={id}
                    type={type}
                    placeholder={`Your ${label.toLowerCase()}`}
                    {...register(id as keyof FormData, { required })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#2E4F6D] 
                      bg-white text-black dark:bg-[#1B3A57] dark:text-white 
                      placeholder:text-gray-400 dark:placeholder:text-gray-300
                      focus:outline-none focus:ring-2 focus:ring-launchab-orange/30 focus:border-launchab-orange"
                  />
                  {errors[id as keyof FormData] && (
                    <p className="text-red-500 text-sm mt-1">
                      {(errors[id as keyof FormData] as any)?.message}
                    </p>
                  )}
                </div>
              ))}

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your business and what you're looking to achieve"
                  {...register("message")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#2E4F6D] 
                    bg-white text-black dark:bg-[#1B3A57] dark:text-white 
                    placeholder:text-gray-400 dark:placeholder:text-gray-300
                    focus:outline-none focus:ring-2 focus:ring-launchab-orange/30 focus:border-launchab-orange"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 flex items-center justify-center dark:shadow-lg dark:shadow-launchab-orange/10"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Launch My Page'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact Info */}
      <section className="py-12 bg-launchab-light dark:bg-[#132D44]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-launchab-navy dark:text-white mb-6">
              Prefer to talk first?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              If you'd rather discuss your project before submitting the form,
              we're happy to chat.
            </p>
            <a
              href="mailto:hello@launchab.com"
              className="text-launchab-orange font-medium hover:underline"
            >
              hello@launchab.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
