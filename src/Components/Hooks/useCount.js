import { useState } from "react";

export function useCount(startcount) {
  const [count, setCount] = useState(startcount || 1);
  
  const onChange = e =>setCount(e.target.value);

  return { count, setCount, onChange };
}