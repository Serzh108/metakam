'use client';
import React from 'react';

interface ErrorComponentProps {
  error: Error;
}

const ErrorComponent = ({}: ErrorComponentProps) => {
  return (
    <div>
      Unexpected <i className="text-red-800">error</i> inside slot sales
    </div>
  );
};

export default ErrorComponent;
