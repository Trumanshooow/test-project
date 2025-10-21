"use client"
import React, { useRef } from 'react'

import SidebarContent from './SidebarContent'

function DesktopSidebar() {
  const sidebarRef = useRef(null)

  return (
    <aside
      id="desktopSidebar"
      ref={sidebarRef}
      className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-blue-300 dark:bg-gray-800 lg:block"
    >
      <SidebarContent />
    </aside>
  )
}

export default DesktopSidebar
