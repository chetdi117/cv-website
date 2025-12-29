/** @format */

'use client';

import { Download } from 'lucide-react';
import { RefObject } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CVType } from '../../models';

interface ExportToggleProps {
  cvType: CVType;
  onChange: () => void;
}

export default function Toggle({ cvType, onChange }: ExportToggleProps) {
  const handleToggle = () => {
    onChange();
  };

  return (
    <label className="inline-flex items-center cursor-pointer absolute end-4 top-2 right-2 h-[22px]">
      <input
        type="checkbox"
        checked={cvType === CVType.FRONTEND}
        onChange={handleToggle}
        className="sr-only peer"
      />
      <div className="relative w-11 h-[22px] bg-gray-300 rounded-[20px] peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
    </label>
  );
}
