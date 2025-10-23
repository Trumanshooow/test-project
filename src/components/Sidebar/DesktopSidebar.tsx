"use client"
import React, { useRef } from 'react'

import SidebarContent from './SidebarContent'

function DesktopSidebar() {
  const sidebarRef = useRef(null)

  return (
    <div
      id="desktopSidebar"
      ref={sidebarRef}
      className="h-full hidden w-64 bg-white dark:bg-gray-800 lg:block"
    >
      <SidebarContent />
    </div>
  )
}

export default DesktopSidebar
