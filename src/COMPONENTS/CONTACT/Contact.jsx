import React from "react";
import { useState } from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

import Footer from "../FOOTER/Footer";
import Navbar from "../HEADER/Navbar";
import IframeLoder from "../../SKELETONS/CONTACTsKELETON/IframeLoder";
function Contact() {
  const [isMapLode, setisMapLode] = useState(true);
  function MapLodingHandler() {
    setisMapLode(false);
  }
  return (
    <>
      <Navbar />

      <section className="px-8 py-8 lg:py-16">
        <div className="container mx-auto text-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 !text-base lg:!text-2xl"
          >
            Contact Us
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:!text-5xl"
          >
            We&apos;re Here to Help
          </Typography>
          <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
            Whether it&apos;s a question about our services, a request for
            technical assistance, or suggestions for improvement, our team is
            eager to hear from you.
          </Typography>
          <div className=" relative grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            {isMapLode && <IframeLoder />}
            <iframe
              className="w-full"
              onLoad={MapLodingHandler}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217760.23951081806!2d74.16958088196087!3d31.482834783684996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1739447612989!5m2!1sen!2s"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className=" h-full flex items-center justify-center w-full">
              <form className="flex  flex-col gap-4 w-full">
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Your Email
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="name@email.com"
                    name="email"
                    className="focus:border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Your Message
                  </Typography>
                  <Textarea
                    rows={6}
                    color="gray"
                    placeholder="Message"
                    name="message"
                    className="focus:border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <Button className="w-full text-[1rem] text-[black] ">
                  Send message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
