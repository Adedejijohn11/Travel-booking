import React from "react";

const Location = () => {
  return (
    <div className="h-full w-full mt-5">
      <div className="h-[450px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.2723881840197!2d6.123303176008064!3d49.61146924741683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548d52aaed64f%3A0x38b74ce776aa051!2sHamilius%20Quai%201!5e0!3m2!1sen!2slu!4v1762703754145!5m2!1sen!2slu"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
