
import { MessagesSquare } from "lucide-react"; // Using MessagesSquare instead of WhatsApp

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Hello! I'm interested in your services." }: WhatsAppButtonProps) => {
  const formattedPhone = phoneNumber.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center dark:bg-green-600 dark:hover:bg-green-700 dark:shadow-[0_0_12px_rgba(0,0,0,0.3)]"
      aria-label="Chat on WhatsApp"
    >
      <MessagesSquare size={28} />
    </a>
  );
};

export default WhatsAppButton;
