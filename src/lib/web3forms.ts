export interface LeadInput {
  name: string;
  phone: string;
  className: string;
  message: string;
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const classLabels: Record<string, string> = {
  class11: "11th Arts Foundation",
  class12: "12th Arts Board Special",
  cuet: "CUET Preparation (Integrated)",
};

export async function submitLeadToWeb3Forms(
  formData: LeadInput,
  accessKey: string
): Promise<{ success: true; message: string } | { success: false; error: string }> {
  if (!accessKey) {
    return { success: false, error: "Form service is not configured. Please call us directly." };
  }

  const classLabel = classLabels[formData.className] ?? formData.className;
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New admission inquiry - ${classLabel}`,
      from_name: "Shree Ram Classes Website",
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      class: classLabel,
      message: formData.message.trim() || "No message provided.",
      submitted_at: new Date().toISOString(),
    }),
  });

  const result = await response.json().catch(() => null) as { success?: boolean; message?: string } | null;
  if (!response.ok || !result?.success) {
    return {
      success: false,
      error: result?.message || "We could not submit your request right now. Please try again or call us directly.",
    };
  }

  return {
    success: true,
    message: "Demo class booked successfully! Alok Sir's team will contact you shortly.",
  };
}
