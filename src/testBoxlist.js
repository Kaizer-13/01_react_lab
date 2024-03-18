import React, { useState } from 'react';

const TextBoxList = () => {
  const [textboxes, setTextboxes] = useState([]);
  const [sum, setSum] = useState(0);

  const addTextBox = () => {
    const newTextBoxes = [...textboxes, { id: Date.now(), value: '0', error: false }];
    setTextboxes(newTextBoxes);
    updateSum(newTextBoxes);
  };

  const deleteTextBox = (id) => {
    const updatedTextBoxes = textboxes.filter((textbox) => textbox.id !== id);
    setTextboxes(updatedTextBoxes);
    updateSum(updatedTextBoxes);
  };

  const updateTextBoxValue = (id, value) => {
    if (/^[0-9]*$/.test(value) || value === '') {
      const updatedTextBoxes = textboxes.map((textbox) =>
        textbox.id === id ? { ...textbox, value, error: false } : textbox
      );
      setTextboxes(updatedTextBoxes);
      updateSum(updatedTextBoxes);
    } else {
      const updatedTextBoxes = textboxes.map((textbox) =>
        textbox.id === id ? { ...textbox, error: true } : textbox
      );
      setTextboxes(updatedTextBoxes);
    }
  };

  const updateSum = (textBoxes) => {
    const totalSum = textBoxes.reduce((acc, textbox) => acc + parseInt(textbox.value, 10), 0);
    setSum(totalSum);
  };

  return (
    <div>
      <button onClick={addTextBox}>Add Textbox</button>

      {textboxes.map((textbox) => (
        <div key={textbox.id}>
          <input
            type="text"
            value={textbox.value}
            onChange={(e) => updateTextBoxValue(textbox.id, e.target.value)}
          />
          {textbox.error && <div style={{ color: 'red' }}>Please enter a valid number</div>}
          <button onClick={() => deleteTextBox(textbox.id)}>Delete</button>
        </div>
      ))}

      <div>
        <strong>Total Sum:</strong> {sum}
      </div>
    </div>
  );
};

export default TextBoxList;
