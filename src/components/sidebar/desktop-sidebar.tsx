"use client"
import React, { useRef } from 'react'

import SidebarContent from './sidebar-content'

function DesktopSidebar() {


  return (
    <div
      id="desktopSidebar"

      className="h-full hidden w-full bg-white dark:bg-gray-800 sm:block"
    >
      <SidebarContent />
    </div>
  )
}

export default DesktopSidebar
