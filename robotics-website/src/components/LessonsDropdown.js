// LessonsDropdown.js
import React, { useState } from 'react';
import Dropdown from 'react-dropdown-select';
import { Link } from 'react-router-dom';

const LessonsDropdown = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessonOptions = [
    { label: 'Lesson 1', value: '1' },
    { label: 'Lesson 2', value: '2' },
    { label: 'Lesson 3', value: '3' },
    { label: 'Lesson 4', value: '4' },
  ];

  const handleLessonChange = (selected) => {
    setSelectedLesson(selected[0].value);
  };

  return (
    <Dropdown
      options={lessonOptions}
      onChange={handleLessonChange}
      placeholder="Select a lesson"
      labelField="label"
      valueField="value"
      clearable
    />
  );
};

export default LessonsDropdown;
