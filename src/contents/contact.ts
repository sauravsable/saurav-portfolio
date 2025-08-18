import { Contact } from "@/types";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export const contact: Contact[] = [
  {
    title: "Email",
    link: "mailto:your.sauravsable4102@gmail.com",
    linkheading: "sauravsable4102@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "Phone",
    link: "tel:+919823585926",
    linkheading: "+91-9823585926",
    icon: FaPhone,
  },
  {
    title: "Location",
    link: "https://maps.app.goo.gl/tJFUeVEmPvR9MVCg8",
    linkheading: "Aurangabad, Maharashtra, India",
    icon: FaMapMarkerAlt,
  },
];
