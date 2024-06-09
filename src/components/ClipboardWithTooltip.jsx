import React from "react";
import { Typography, Button, Tooltip } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export function ClipboardWithTooltip({ text }) {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    copy(text);
    setCopied(true);
  };

  return (
    <Tooltip content={copied ? "Copied" : "Copy"}>
      <Button
        onMouseLeave={() => setCopied(false)}
        onClick={handleCopy}
        className="flex items-center gap-x-3 px-4 py-2.5 lowercase w-full md:w-auto overflow-hidden"
        style={{ width: '100%' }}
      >
        <Typography
          className="border-r border-gray-400/50 pr-3 font-normal text-left text-xs sm:text-sm md:text-base"
          variant="small"
        >
          <div className="break-words">
            <pre>
            {text.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
            </pre>
          </div>
        </Typography>
        {copied ? (
          <CheckIcon className="h-4 w-4 text-white" />
        ) : (
          <DocumentDuplicateIcon className="h-4 w-4 text-white" />
        )}
      </Button>
    </Tooltip>
  );
}
