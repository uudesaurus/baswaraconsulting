import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export function FounderProfile() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              {/* Placeholder for Arief's photo - replace src with actual photo path */}
              <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                Photo Placeholder
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-heading font-semibold mb-2">Arief Sudrajat</h3>
            <p className="text-lg text-muted-foreground mb-4">Founder & Managing Director</p>
            <div className="prose prose-blue">
              <p className="text-muted-foreground">
                With over two decades of experience in global industry and national health reform,
                Arief Sudrajat brings deep expertise in strategic consulting and implementation.
                His work spans across major international organizations and Fortune 500 companies,
                delivering actionable insights and sustainable solutions.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 