import React, { useState } from 'react';
import BaseModal from './BaseModal';

interface FilterModalProps {
  onCreateWine: (name: string, price: number) => void;
}

const CreateWineModal: React.FC<FilterModalProps> = (props) => {
  const { onCreateWine } = props;

  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  return (
    <BaseModal
      isOpen={false}
      title="와인등록"
      confirmText="필터 적용하기"
      onConfirm={() => {
        onCreateWine(name, price);
      }}
      onClose={function (): void {
        throw new Error('Function not implemented.');
      }}
      cancelText="취소"
    >
      {/* TODO: WINE TYPES */}
      <div>
        {/* TODO: 이름 입력하는 form */}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div>
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(Number(e.target.value));
          }}
        />
      </div>
    </BaseModal>
  );
};

export default CreateWineModal;
