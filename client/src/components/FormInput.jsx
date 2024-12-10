import React from 'react';

const FormInput = ({ label, type, name, value, onChange }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px' }}>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        required
      />
    </div>
  );
};

export default FormInput;
