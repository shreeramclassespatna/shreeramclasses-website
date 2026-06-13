"use server";

import fs from "fs/promises";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "src/data/leads.json");

export interface LeadInput {
  name: string;
  phone: string;
  className: string;
  message: string;
}

export async function submitLead(formData: LeadInput): Promise<{ success: true; message: string } | { success: false; error: string }> {
  try {
    // Basic validation
    if (!formData.name || formData.name.trim().length < 2) {
      return { success: false, error: "Please enter a valid name (minimum 2 characters)." };
    }
    if (!formData.phone || !/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      return { success: false, error: "Please enter a valid 10-digit Indian mobile number." };
    }
    if (!formData.className || formData.className === "") {
      return { success: false, error: "Please select your class." };
    }

    const newLead = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      className: formData.className,
      message: formData.message.trim(),
      submittedAt: new Date().toISOString(),
    };

    let leads: any[] = [];
    try {
      const fileData = await fs.readFile(LEADS_FILE, "utf-8");
      leads = JSON.parse(fileData);
    } catch (err: any) {
      // File doesn't exist yet, we will create it
      leads = [];
    }

    leads.push(newLead);

    // Ensure the folder exists
    await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");

    return { success: true, message: "Demo class booked successfully! Alok Sir's team will contact you shortly." };
  } catch (error: any) {
    console.error("Error saving lead:", error);
    return { success: false, error: "An unexpected error occurred. Please try again or call us directly." };
  }
}
