export const runtime = "nodejs"; // aqui é nodejs, não node

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar vagas" },
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const job = await prisma.job.create({
      data: {
        cidade: body.cidade,
        empresa: body.empresa,
        url: body.url,
        descricao: body.descricao,
        local: body.local,
        status: body.status,
        tipo: body.tipo,
        qualidade: body.qualidade,
        chance: body.chance,
        habilidades: body.habilidades,
      },
    });

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar vaga" },
      { status: 500 }
    );
  }
}