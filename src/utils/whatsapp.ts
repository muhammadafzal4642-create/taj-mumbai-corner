/**
 * WhatsApp integration utility for Taj Mumbai Corner.
 * Sanitizes phone numbers and formats encoded prefilled messages.
 */

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export function cleanPhoneForWhatsApp(phone: string): string {
  // Strip spaces, dashes, parentheses and ensure leading + or country code
  const cleaned = phone.replace(/[^0-9]/g, '');
  return cleaned;
}

export function generateWhatsAppOrderUrl(
  whatsappNumber: string,
  cart: CartItem[],
  currencySymbol: string,
  guestInfo?: { name?: string; orderType?: string; notes?: string }
): string {
  const cleanNumber = cleanPhoneForWhatsApp(whatsappNumber);
  
  if (!cart || cart.length === 0) {
    const defaultText = 'Hello Taj Mumbai Corner, I would like to know more about your menu and place an order.';
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(defaultText)}`;
  }

  const itemsList = cart
    .map(
      (item) =>
        `• ${item.quantity}x ${item.name} (${currencySymbol}${(item.price * item.quantity).toFixed(2)})`
    )
    .join('\n');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let message = `*Taj Mumbai Corner - New Order Inquiry*\n\n`;
  message += `*Selected Dishes:*\n${itemsList}\n\n`;
  message += `*Estimated Subtotal:* ${currencySymbol}${subtotal.toFixed(2)}\n\n`;

  if (guestInfo?.name) {
    message += `*Guest Name:* ${guestInfo.name}\n`;
  }
  if (guestInfo?.orderType) {
    message += `*Preference:* ${guestInfo.orderType}\n`;
  }
  if (guestInfo?.notes) {
    message += `*Special Requests:* ${guestInfo.notes}\n`;
  }

  message += `\nThank you! Please confirm item availability and preparation time.`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppReservationUrl(
  whatsappNumber: string,
  reservation: {
    name: string;
    phone: string;
    date: string;
    time: string;
    guests: number;
    notes?: string;
  }
): string {
  const cleanNumber = cleanPhoneForWhatsApp(whatsappNumber);
  let msg = `*Taj Mumbai Corner - Table Reservation Request*\n\n`;
  msg += `*Name:* ${reservation.name}\n`;
  msg += `*Phone:* ${reservation.phone}\n`;
  msg += `*Date:* ${reservation.date}\n`;
  msg += `*Time:* ${reservation.time}\n`;
  msg += `*Party Size:* ${reservation.guests} Guests\n`;
  if (reservation.notes) {
    msg += `*Special Requests:* ${reservation.notes}\n`;
  }
  msg += `\nPlease let me know if a table is available for this time.`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
}
