"use client";

import React from "react";
import { Contributor } from "../../types";
import CreditColumn from "./creditColumn";

interface CreditProps {
  editorial_by: Contributor;
  writers: Contributor[];
  thanks: string[];
  staff: string[];
  issue: string;
}

const Credits: React.FC<CreditProps> = ({
  editorial_by,
  writers,
  thanks,
  staff,  
  issue,
}) => {
  return (
    <div className="flex flex-wrap pb-4 pt-2 justify-between w-[80%] sm:w-[94%] md:w-[94%] lg:w-[100%] lg:m-auto lg:gap-[0.5rem] xl:w-[57%] xl:pb-5 xl:pt-5 xl:gap-[2rem] xl:my-8 xl:ml-auto">
      <CreditColumn title="issue editorial" path={`/${issue}/editorial`} children={[editorial_by.name]} />
      <CreditColumn title="contributing writers" path="/contributor" children={writers} />
      <CreditColumn title="contributing staff" path="/contributor" children={staff} />
      <CreditColumn title="special thanks" path="none" children={thanks} />
    </div>
  );
};

export default Credits;
