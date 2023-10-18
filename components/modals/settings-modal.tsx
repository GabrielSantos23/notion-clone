'use client';

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';

import { useSettings } from '@/hooks/use-settings';
import { Label } from '@/components/ui/label';

import { ModeToggle } from '../mode-toggle';

export const SettingsModal = () => {
  const Settings = useSettings();

  return (
    <Dialog open={Settings.isOpen} onOpenChange={Settings.onClose}>
      <DialogContent>
        <DialogHeader className='border-b pb-3 '>
          <h2 className='text-lg font-medium'>My settings </h2>
        </DialogHeader>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-y-1 '>
            <Label>Apparence</Label>
            <span className='text-[0.8rem] text-muted-foreground'>
              Customize how Notion looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
