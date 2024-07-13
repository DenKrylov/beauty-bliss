import { Button } from '@headlessui/react';

interface SimpleButtonProps {
  str: string;
}

export function SimpleButton(props: SimpleButtonProps) {
  const { str } = props;
  return (
    <Button>
        {str}
    </Button>
  );
}
