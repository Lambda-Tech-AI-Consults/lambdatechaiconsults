'use client'

const MapSection = () => {
  return (
    <div className="w-full h-96 mt-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d605.8297333361995!2d3.4718150546982836!3d6.455910562406126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%205%20house%202%20Africa%20Lane!5e0!3m2!1sen!2sng!4v1749829839780!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;