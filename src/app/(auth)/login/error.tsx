"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  console.error(error);
  return (
    <div>
      Error: {error.message}
      <button style={{ marginLeft: "10px" }} onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Error;
