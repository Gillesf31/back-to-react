import { useState } from 'react';

type ExpandableTextProps = {
  readonly children: string;
  readonly maxChars?: number;
};

const ExpandableText = ({ children, maxChars = 20 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = isExpanded
    ? children
    : children!.toString().substring(0, maxChars) + '...';

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Less' : 'Expand'}
      </button>
    </div>
  );
};

export default ExpandableText;
