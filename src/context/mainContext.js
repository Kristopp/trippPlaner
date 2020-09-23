import React from 'react';

const initalState = [
    {
      title: String,
      startDate: {
        type: Date,
      },
      rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
      },
      category: String,
      details: String,
      whoPays: String,
      pictures: String,
      expense: Number,
    },
    {
      timestamps: true,
    },
  ];
  export default React.createContext(initalState);
