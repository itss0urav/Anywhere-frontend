import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Poll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Question:', question);
    console.log('Options:', options);
    // Implement your logic to submit the poll
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Question</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={handleQuestionChange}
        />
      </Form.Group>
      <Form.Group>
        {options.map((option, index) => (
          <div key={index} className="d-flex align-items-center">
            <Form.Label className="me-3">{`Option ${index + 1}`}</Form.Label>
            <Form.Control
              type="text"
              placeholder={`Enter option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(e, index)}
            />
            {options.length > 2 && (
              <Button
                variant="danger"
                className="ms-3"
                onClick={() => handleRemoveOption(index)}
              >
                Remove
              </Button>
            )}
          </div>
        ))}
      </Form.Group>
      <div className='buttonInStyle'>
      <Button variant="secondary" onClick={handleAddOption}>
        Add Option
      </Button>
      <Button variant="primary" type="submit" className="ms-3">
        Submit
      </Button>
      </div>
      
    </Form>
  );
};

export default Poll;
