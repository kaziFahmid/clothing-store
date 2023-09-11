import { NextResponse } from 'next/server'
import DbConnect from '@/db.config'
export async function GET(request) {
  let client= await DbConnect()
  const clothingCollections= client.db('clothingDB').collection('clothingCollections')
  const result= await clothingCollections.find().toArray()
  return NextResponse.json(result , { status: 500 })
}