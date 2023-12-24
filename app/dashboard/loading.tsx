import React from 'react';
import DashboardSkeleton from '@/app/ui/skeletons';

type Props = {};

export default function loading({}: Props) {
  return <DashboardSkeleton />;
}
