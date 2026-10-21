"use client";

import { AppLayout } from "@/components/app-layout";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export default function AsesorPage() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Asesor GPT
          </h1>
          <p className="text-slate-600">
            Tu colaborador inteligente para mejorar tus planes
          </p>
        </div>

        <Card>
          <CardContent className="py-16 text-center">
            <MessageSquare className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <p className="text-lg text-slate-600 mb-2">
              Integración con IA próximamente
            </p>
            <p className="text-sm text-slate-500">
              Podrás conversar con un asesor inteligente que te ayudará a optimizar tus planes
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
