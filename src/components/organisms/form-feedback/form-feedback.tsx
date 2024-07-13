'use client';
import { Description, Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useCallback, useState } from 'react';

export function FormFeedback(): JSX.Element {
  const t = useTranslations('HomePage');
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }, []);

  return <div>
    <form>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Name</Label>
        <Description className="text-sm/6 text-white/50">Use your real name so people will recognize you.</Description>
        <Input
          value={firstName}
          onChange={handleChange}
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Телефон/Email</Label>
        <Description className="text-sm/6 text-white/50">Use your real name so people will recognize you.</Description>
        <Input
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        />
      </Field>
      <Field>
        <Input
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        />
      </Field>
    </form>
  </div>;
}
