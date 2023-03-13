import React, { useState } from 'react';

export function TabsCrew({ children }) {
  function findActiveTab(a) {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }

  function tabValidator(tab) {
    return tab.type.displayName === 'TabCrew' ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));
  return (
    <>
      <div className="flex gap-2 justify-start absolute left-40 max-[800px]:relative max-[800px]:left-0 max-[800px]:mx-auto">
        {children.map((item, i) => {
          return (
            <>
              {tabValidator(item) && (
                <TabCrew
                  key={`tab-{i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </TabCrew>
              )}
            </>
          );
        })}
      </div>
      <div className="p-5">
        {children.map((item, i) => {
          return (
            <div className={` ${i === activeTab ? 'visible' : 'hidden'}`}>
              {item.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function TabCrew({ children, activeTab, currentTab, setActiveTab }) {
  return (
    <>
      <div
        className={`px-5 py-3 rounded cursor-pointer
      ${
        activeTab === currentTab
          ? 'opacity-50 select-none'
          : 'text-white select-none'
      }`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}

TabCrew.displayName = 'TabCrew';
