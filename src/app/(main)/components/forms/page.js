"use client";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export default function Forms() {
  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    message: "",
  });
  const validateForm = () => {
    const { firstName, lastName, number, email, message } = FormData;

    // Check empty fields
    if (!firstName.trim())
      return { ok: false, error: "First name is required" };
    if (!lastName.trim()) return { ok: false, error: "Last name is required" };
    if (!number.trim()) return { ok: false, error: "Phone number is required" };
    if (!email.trim()) return { ok: false, error: "Email is required" };
    if (!message.trim()) return { ok: false, error: "Message is required" };

    // Check phone number (only digits, length >= 8 for example)
    if (!/^\d{8,15}$/.test(number))
      return { ok: false, error: "Invalid phone number" };

    // Check email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return { ok: false, error: "Invalid email format" };

    return { ok: true };
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const check = validateForm();

    if (!check.ok) {
      alert(check.error);
      return;
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-5  m-5">
        <div className="grid  items-center gap-3">
          <Label htmlFor={"FirstName"}>First Name</Label>
          <Input
            value={FormData.firstName}
            onChange={(e) =>
              setFormData({ ...FormData, firstName: e.target.value })
            }
            type={"text"}
            id={"FirstName"}
            className={"h-15"}
            placeholder={"First Name"}
          />
        </div>
        <div className="grid  items-center gap-3">
          <Label htmlFor={"LastName"}>Last Name</Label>
          <Input
            value={FormData.lastName}
            onChange={(e) =>
              setFormData({ ...FormData, lastName: e.target.value })
            }
            type={"text"}
            id={"LastName"}
            className={"h-15"}
            placeholder={"First Name"}
          />
        </div>
        <div className="grid  items-center gap-3">
          <Label htmlFor={"Number"}>Number</Label>
          <Input
            value={FormData.number}
            onChange={(e) =>
              setFormData({ ...FormData, number: e.target.value })
            }
            type={"text"}
            id={"Number"}
            className={"h-15"}
            placeholder={"First Name"}
          />
        </div>
        <div className="grid  items-center gap-3">
          <Label htmlFor={"email"}>Email</Label>
          <Input
            value={FormData.email}
            onChange={(e) =>
              setFormData({ ...FormData, email: e.target.value })
            }
            type={"email"}
            id={"email"}
            className={"h-15"}
            placeholder={"First Name"}
          />
        </div>
        <div className=" gap-2 w-full grid col-span-2">
          <Label htmlFor="message">Your Message</Label>
          <Textarea
            value={FormData.message}
            onChange={(e) =>
              setFormData({ ...FormData, message: e.target.value })
            }
            id="message"
            placeholder="Type your message here."
            className={"h-30"}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="w-fit mx-5 cursor-pointer px-10 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </>
  );
}
