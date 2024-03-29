import * as React from "react";
import Cta from "../components/cta";
import { Address } from "@yext/pages/components";

const Contact = (props: any) => {
  const { address, phone, showCTA } = props;

  return (
    <>
      <div className={`${showCTA ? "" : "addrGrid"}`}>
        <div>
          <div>{address.line1}</div>
          {address.line2 && <div>{address.line2}</div>}
          <div className="mt-1">
            {address.city}, {address.region} {address.postalCode}
          </div>
        </div>
        {showCTA && (
          <>
            <div className="mt-4 text-xl uppercase text-green-600  hover:cursor-pointer hover:underline underline-offset-8">
              <a>Get Directions</a>
            </div>
            <div className="w-30 mt-4 md:mt-10">
              <Cta
                buttonText="Order Online"
                url="#"
                style="secondary-cta"
              ></Cta>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Contact;
