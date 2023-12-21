import React from 'react'
import {Code} from "@nextui-org/react";

const CodeSnippet = ({code}) => {
  return (
    <div className="flex flex-col gap-4">
    <Code size="md">{code}</Code>
  </div>
  )
}

export default CodeSnippet