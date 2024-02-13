import { SideBarItem } from "../types";

// Icons import
import account from "../assets/icons/account.svg";
import calendar from "../assets/icons/calendar.svg";
import news from "@/assets/icons/news.svg";
import checkout from "@/assets/icons/checkout.svg";
import expense from "@/assets/icons/expense.svg";
import member from "@/assets/icons/member.svg";
import timesheet from "@/assets/icons/timesheet.svg";
import admin from "@/assets/icons/admin.svg";

export const sideBarItems: SideBarItem[] = [
	{
		text: "My Account",
		icon: account,
		submenu: ["My profile"],
	},
	{
		text: "Company Calendar",
		icon: calendar,
		submenu: [
			"Manage Company Calendar",
			"Pending Calendar Events",
			"Upcoming Events",
		],
	},
	{
		text: "Company News",
		icon: news,
		submenu: ["Press Releases", "Member Announcements"],
	},
	{
		text: "Equipment Checkout",
		icon: checkout,
		submenu: ["Reserve Equipment", "My Equipment History"],
	},
	{
		text: "Expense Tools",
		icon: expense,
		submenu: ["Expense Form", "Currency Converter", "Per Diem Rates"],
	},
	{
		text: "Member Tools",
		icon: member,
		submenu: [
			"Online Training",
			"Onsite Courses",
			"Online Courses",
			"Webinars",
			"Member Discounts",
		],
	},
	{
		text: "Timesheet Reporting",
		icon: timesheet,
		submenu: ["Timesheet Report"],
	},
	{
		text: "System Admin Tools",
		icon: admin,
		submenu: [
			"Member Lookup",
			"Internal Users",
			"Equipment Checkout",
			"Equipment Inventory",
		],
	},
];
