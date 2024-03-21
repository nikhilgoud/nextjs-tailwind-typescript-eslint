import {type NextRequest, NextResponse} from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  // Get data from your database
  return NextResponse.json({
    name: '',
    message: 'Hello!',
    date: new Date().toString(),
  });
}
