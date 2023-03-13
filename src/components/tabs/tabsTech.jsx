import React, { useState } from 'react';

export function TabsTech({ children }) {
  function findActiveTab(a) {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }

  function tabValidator(tab) {
    return tab.type.displayName === 'TabTech' ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));
  return (
    <>
      <div className="flex flex-col max-sm:flex-row max-sm:mx-auto  gap-8 justify-start absolute left-10 max-[800px]:left-0 max-[800px]:relative">
        {children.map((item, i) => {
          return (
            <div key={i}>
              {tabValidator(item) && (
                <TabTech
                  key={`tab-{i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </TabTech>
              )}
            </div>
          );
        })}
      </div>
      <div className="p-5">
        {children.map((item, i) => {
          return (
            <div
              key={i}
              className={` ${i === activeTab ? 'visible' : 'hidden'}`}
            >
              {item.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function TabTech({ children, activeTab, currentTab, setActiveTab }) {
  return (
    <>
      <div
        className={`px-5 py-3 rounded cursor-pointer
      ${
        activeTab === currentTab
          ? 'opacity-50 select-none border-r-4 max-sm:border-r-0 max-sm:border-b-4 '
          : 'text-white select-none'
      }`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}

TabTech.displayName = 'TabTech';
