"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  FileText,
  Wallet,
  Settings,
  PhoneCall,
  User2Icon,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Profile",
    url: "/profile",
    icon: User2Icon,
  },
  {
    title: "Billings",
    url: "/dashboard",
    icon: FileText,
  },
  {
    title: "Invoices",
    url: "/invoices",
    icon: Wallet,
  },
];

const settings = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Help",
    url: "/help",
    icon: PhoneCall,
  },
  {
    title: "Log out",
    url: "/logout",
    icon: LogOut,
  },
];

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export function AppSidebar() {
  const pathName = usePathname();

  return (
    <div>
      <Sidebar side="left" variant="sidebar" collapsible="offcanvas" className="border-none">
      <SidebarHeader className="p-2">
        <img src="/assets/images/Group 27.svg" alt="" />
        <span className="text-[#551FFF] text-[16.89px]">Nucleus</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-[3rem] gap-6">
              {items.map((item, i) => {
                const isActive = pathName === item.url;

                return (
                  <motion.div
                    key={item.title}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={menuItemVariants}
                  >
                    <SidebarMenuItem
                      className={` rounded-3xl ${
                        isActive
                          ? "bg-[#F3F0FF] text-[#551FFF]"
                          : "text-[#D0D2DA]"
                      } p-4 hover:bg-[#F3F0FF] hover:text-[#551FFF]`}
                    >
                      <SidebarMenuButton
                        asChild
                        variant="default"
                        className="text-lg hover:text-[#551FFF]"
                      >
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="px-2 text-[#D0D2DA]">
          <hr />
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className=" gap-6">
              {settings.map((setting, i) => {
                const isActive = pathName === setting.url;

                return (
                  <motion.div
                    key={setting.title}
                    custom={i + items.length} // Offset index to avoid delay conflict
                    initial="hidden"
                    animate="visible"
                    variants={menuItemVariants}
                  >
                    <SidebarMenuItem
                      className={` rounded-3xl ${
                        isActive
                          ? "bg-[#F3F0FF] text-[#551FFF]"
                          : "text-[#D0D2DA]"
                      } p-4 hover:bg-[#F3F0FF] hover:text-[#551FFF]`}
                    >
                      <SidebarMenuButton
                        asChild
                        className="text-lg hover:text-[#551FFF]"
                      >
                        <a href={setting.url}>
                          <setting.icon />
                          <span>{setting.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </div>
    
  );
}
