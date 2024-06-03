import DbSingleton from '@/db/repo';
import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const fundUuid = searchParams.get('uuid');

  const db = DbSingleton.getInstance();
  const funds = db.getAllFunds();

  if (fundUuid) {
    const fund = funds.find((fund) => fund.uuid === fundUuid);
    if (fund) {
      return NextResponse.json(fund, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Fund not found' }, { status: 404 });
    }
  }

  return NextResponse.json(funds, { status: 200 });
}

export async function POST() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
