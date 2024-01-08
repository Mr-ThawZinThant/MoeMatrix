import React, { useState } from 'react';

interface PaymentProps {
  onPaymentSubmit: (cardNumber: string, expiryDate: string, cvv: string) => void;
}

const Payment: React.FC<PaymentProps> = ({ onPaymentSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You may want to perform validation before submitting
    onPaymentSubmit(cardNumber, expiryDate, cvv);
  };

  return (
    <form onSubmit={handlePaymentSubmit} className="max-w-sm mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiryDate"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit Payment
      </button>
    </form>
  );
};

export default Payment;
