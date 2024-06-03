import DbSingleton from '@/db/repo';
import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const db = DbSingleton.getInstance();
  const content = db.getBlogContent();

  return NextResponse.json(content, { status: 200 });
}

export async function POST() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
