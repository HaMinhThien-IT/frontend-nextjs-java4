import React from 'react';

export function useModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return {
    handleClose,
    handleOpen,
    open,
  };
}
