import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

jest.mock('./Api');

describe('Button', () => {
  describe('when there is no text in input A', () => {
    it('should be disabled', () => {
      // Assign

      render(<App />);

      // Act

      userEvent.type(screen.getByPlaceholderText(/input b/i), 'test');

      // Assert

      expect(screen.getByRole('button')).toBeDisabled();

    });
  });

  describe('when there is no text in input B', () => {
    it ('should be disabled', () => {
      // Assign

      render(<App />)

      // Act

      userEvent.type(screen.getByPlaceholderText(/input a/i), 'test');

      // Assert

      expect(screen.getByRole('button')).toBeDisabled();
    }); 
  });

  describe('when there is text in both inputs', () => {
    it('should be enabled', () =>{
      // Assign

      render(<App />);

      // Act

      userEvent.type(screen.getByPlaceholderText(/input a/i), 'test');
      userEvent.type(screen.getByPlaceholderText(/input b/i), 'test');

      // Assert

      expect(screen.getByRole('button')).toBeEnabled();
    });

    describe('and the button is clicked', () => {
      beforeEach(() => {
        render(<App />);
        userEvent.type(screen.getByPlaceholderText(/input a/i), 'input a');
        userEvent.type(screen.getByPlaceholderText(/input b/i), 'input b');
      });
      it('should pass inputs to API call', () => {
        // Assign

        const { get } = require('./Api');

        // Act

        userEvent.click(screen.getByRole('button', { name: /click me/i}));

        // Assert

        expect(get).toBeCalledWith('input a', 'input b');
      });
    });
  });
});