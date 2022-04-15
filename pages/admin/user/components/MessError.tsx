import React from 'react';
type Props = {
  mess: any;
};
export default function MessError(props: Props) {
  return (
    <>
      {props.mess && (
        <span style={{ color: 'red', fontSize: '14px', fontWeight: '500' }}>{props.mess && props.mess}</span>
      )}
    </>
  );
}
