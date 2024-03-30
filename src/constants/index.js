import { MdWindow } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { IoIosAlert } from "react-icons/io";
import { BiSolidDollarCircle } from "react-icons/bi";
import { SiBitcoinsv } from "react-icons/si";
import { BiSupport } from "react-icons/bi";


export const sideBarLink = [
    {
        icon: MdWindow,
        title: "Dashboard",
        link: "/"
    },
    {
        icon: GoArrowSwitch,
        title: "Transactions",
        link: "/transaction"
    },
    {
        icon: BiSupport,
        title: "Support",
        link: "/support"
    },
]

export const timings = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"];

export const tabs = [
    {
        title: "1H",
    },
    {
        title: "1D",
    },
    {
        title: "1W",
    },
    {
        title: "1M",
    },

];

export const transactionRecords = [
    {
        currency: BiSolidDollarCircle,
        title: "INR Deposit",
        date: "2022-06-09 7:06 PM",
        amount: "+ PKR81,123.10",
    },
    {
        currency: SiBitcoinsv,
        title: "BTC Sell",
        date: "2022-05-27 12:32 PM",
        amount: "- 12.48513391 BTC",
        profit: "+ $81,123.10"
    },
    {
        currency: BiSolidDollarCircle,
        title: "INR Deposit",
        date: "2022-06-09 7:06 PM",
        amount: "+ PKR81,123.10",
    },
]

export const transactionsTabs = [
    {
        title: "All",
        value: "349",
    },
    {
        title: "Deposit",
        value: "114",
    },
    {
        title: "Withdraw",
        value: "113",
    },
    {
        title: "Trade",
        value: "22",
    },
]

export const tableData = [
    {
        id: "HD82NA2H",
        date: "2022-06-09",
        time: "07:06 PM",
        type: {
            name: "INR Deposit",
            method: "E-Transfer"
        },
        amount: "+ PKR81,123.10",
        status: "Pending",
    },
    {
        id: "HD82NA2H",
        date: "2022-06-07",
        time: "02:48 PM",
        type: {
            name: "INR Withdraw",
            method: "Wire-Transfer"
        },
        amount: "- PKR81,123.10",
        status: "Processing",
    },
    {
        id: "HD82NA2H",
        date: "2022-06-04",
        time: "09:21 AM",
        type: {
            name: "Buy",
        },
        amount: "+ 12.48513391 BTC",
        profit: "- $81,123.10",
        status: "Cancelled",
    },
    {
        id: "HD82NA2H",
        date: "2022-06-03",
        time: "01:32 PM",
        type: {
            name: "Sell",
        },
        amount: "- 0.36401628 BTC",
        profit: "+ $19,378.84",
        status: "Completed",
    },
    {
        id: "HD82NA2H",
        date: "2022-06-03",
        time: "09:02 AM",
        type: {
            name: "BTC Deposit",
        },
        amount: "+ 4.13946104 BTC",
        profit: "+ $37,929.31",
        status: "Completed",
    },
    {
        id: "HD82NA2H",
        date: "2022-06-01",
        time: "01:56 PM",
        type: {
            name: "BTC Withdraw",
        },
        amount: "- 10.00000000 BTC",
        profit: "- $62,017.58",
        status: "Completed",
    },
]