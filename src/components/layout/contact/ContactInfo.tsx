'use client'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <FaMapMarkerAlt className="text-xl text-primary" />
        <div>
          <h4 className="font-semibold">Address</h4>
          <p>Plot 5 house 2 Africa Lane off Admiralty Road, Lekki Phase 1, Lagos.</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <FaPhoneAlt className="text-xl text-primary" />
        <div>
          <h4 className="font-semibold">Phone</h4>
          <p>+234 809 100 3425</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <FaEnvelope className="text-xl text-primary" />
        <div>
          <h4 className="font-semibold">Email</h4>
          <p>info@lamdatechaiconsults.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
