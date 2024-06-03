'use server';

import DbSingleton from '@/db/repo';
import { redirect } from 'next/navigation';

const db = DbSingleton.getInstance();

const depositAction = async (fundUuid: string, formData: FormData) => {
  const depositAmount = formData.get('amount');
  const reference = generatePaymentReference();

  try {
    if (!depositAmount) {
      throw new Error('Deposit amount is missing');
    }

    db.createDeposit({
      reference: reference,
      fundUuid: fundUuid,
      amount: Number(depositAmount)
    });
  } catch (error) {
    console.error('Error creating deposit:', error);

    throw error;
  }

  redirect(`/retail/isa/success/${reference}`); // Navigate to the new post page
};

function generatePaymentReference(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let reference = '';
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    reference += characters[randomIndex];
  }
  return reference;
}

export default depositAction;
