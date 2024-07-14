'use client';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { useCallback, useState } from 'react';

interface TabsProps {
  element: string[];
}

export function Tabs(props: TabsProps) {
  const { element } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <TabList>
        {element.map((el, index) =>
          <Tab key={index}>
            {el}
          </Tab>
        )}
      </TabList>
    </TabGroup>
  );
}
