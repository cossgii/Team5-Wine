import React from 'react';

interface BaseModalProps extends React.PropsWithChildren {
  isOpen: boolean;
  title: string;

  confirmText: string;
  onConfirm: () => void;

  cancelText?: string;
  onCancel?: () => void;

  onClose: () => void;
}

const BaseModal: React.FC<BaseModalProps> = (props) => {
  const { isOpen, title, confirmText, cancelText, onClose, onConfirm, onCancel, children } = props;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* TODO: 헤더 영역 */}
        <h2>{title}</h2>
        <button onClick={onClose}>X</button>
      </div>
      <div>
        {/* TODO: body */}
        {children}
      </div>
      <div>
        {/* TODO: footer */}
        {cancelText && <button onClick={onCancel}>{cancelText}</button>}
        <button onClick={onConfirm}>{confirmText}</button>
      </div>
    </div>
  );
};

export default BaseModal;
