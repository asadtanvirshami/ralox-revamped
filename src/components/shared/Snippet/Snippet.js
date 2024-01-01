import React, { memo } from "react";
import { Snippet } from "@nextui-org/react";

const SnippetCom = ({ text }) => {
  return <Snippet>{text}</Snippet>;
};

export default memo(SnippetCom);
