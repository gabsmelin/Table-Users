import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf-8');

export async function GET(request,{params}) {
    const id = params.id;
    console.log(id);
    if(id == 'all-users') {
        return NextResponse.json(JSON.parse(file));
    } else if(id > 0) {
        const usu = JSON.parse(file).find(usu => usu.id == id)
        return NextResponse.json(usu);
    } else {
        return id == 0 ? NextResponse.json(file) : NextResponse.redirect('http://localhost:3000/');
    }
}
