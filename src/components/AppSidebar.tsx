"use client";

import { usePathname } from "next/navigation";

import {
  File,
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
    icon: File,
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

export function AppSidebar() {
  const pathName = usePathname();

  return (
    <div className="min-h-screen">
      <Sidebar side="left" variant="sidebar" collapsible="none">
        <SidebarHeader className="p-2">
          <img src="/assets/images/Group 27.svg" alt="" />
          <span className="text-[#551FFF] text-[16.89px]">Nucleus</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="mt-[3rem] gap-6">
                {items.map((item) => {
                  const isActive = pathName === item.url;

                  return (
                    <SidebarMenuItem
                      key={item.title}
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
                {settings.map((setting) => {
                  const isActive = pathName === setting.url;

                  return (
                    <SidebarMenuItem
                      key={setting.title}
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
