import React, { useEffect, useRef, useState } from 'react';
import useOnClickOutside from '@utils/useOnClickOutside';
import { Container, Loading } from './styles';

interface ModalImp {
  open: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalImp> = ({ children, open, loading = false }) => {
  const [isOpen, setIsOpen] = useState(open);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useOnClickOutside(contentRef, () => setIsOpen(false));

  return (
    <>
      {isOpen && (
        <Container data-testid="modal">
          <div ref={contentRef}>
            {loading ? <Loading data-testid="loading" /> : children}
          </div>
        </Container>
      )}
    </>
  );
};

export default Modal;
