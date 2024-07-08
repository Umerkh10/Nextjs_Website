const { NextResponse,NextRequest } = require("next/server");

export async function POST(req){
    console.log(req);
    return NextResponse.json(
        {success:"post created successfully"},
        {status:200}
    )
}

export async function GET(){
    return NextResponse.json(
        {success:"hello"},
        {status:200}
    )
}