'use client';

import CreateWineModal from '@/components/modals/FilterModal';
import './globals.scss';
import '@/styles/Font-Mixins.scss';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>와인 생성</button>

      {isOpen && (
        <CreateWineModal
          onCreateWine={() => {
            // TODO: 와인 생성 API 호출
          }}
        />
      )}
    </div>
  );
}
