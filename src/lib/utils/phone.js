export function buildPhone(countryCode, phoneNumber) {
  const parts = [countryCode, phoneNumber].filter(Boolean);
  return parts.join(" ").trim();
}

